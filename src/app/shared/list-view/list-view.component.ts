import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { debounceTime, reduce } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { environment } from './../../../environments/environment'
import { ChangePasswordComponent } from '../../user/change-password/change-password.component';
import * as _ from 'lodash'; 
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0}),
        animate(200)
      ]),
      transition(':leave',
        animate(1000, style({opacity: 0, background: '#f26060'})))
    ])
  ]
})

export class ListViewComponent implements OnInit {
  public data: any = [];
  public pagination: any = {}
  public columns = [];
  public columnNames = [];
  private keyMapper = {
    bot: 'bots', 'charging-stations': 'charging_stations',
    'maintenance-info': 'maintenance_infos', 'apps': 'apps',
    'products': 'products',
    'mobility-device-reporting': 'mobility_device_report',
    'service-provider-operation-reporting': 'mobilty_device_report',
    'service-provider': 'service_providers',
    'remote-operator': 'remote_operators',
    'user': 'users'
  }
  @Input() apiEndPoint: any;
  @Input() report?: Boolean = false;
  @Output() createFormEvent = new EventEmitter();
  modelChanged = new Subject<object>();
  modalRef: BsModalRef;
  itemToDelete: Object = {};
  filterQuery: String;
  bsModalRef: BsModalRef;
  itemToDeleteIndex: -1;
  apiEndPointName : '';
  reportData: any;

  constructor(private http: HttpClient, private modalService: BsModalService) {
    this.modelChanged
      .pipe(
        debounceTime(300))
      .subscribe((params) => {
        this.fetchData(params)
      })
  }

  ngOnInit(): void {
    this.apiEndPointName = this._titleCase(this.apiEndPoint.split("-").join(" "))
    this.fetchData({ page: 1, limit: 10 });
  }

  fetchData(params) {
    let httpParams = new HttpParams({ fromObject: params });
    let endpoint = `${environment.apiURL}/${this.apiEndPoint}/show`
    if (this.report) {
      endpoint = `${environment.apiURL}/reporting/${this.apiEndPoint}`
    }
    this
      .http
      .get(endpoint, {
        params: httpParams
      })
      .subscribe(data => {
        this.data = [];
        try {
          this.data = data['data'][this.keyMapper[this.apiEndPoint]];
          if(this.report)
            this.columns = Object.keys(this.data[0]);
          else
            this.columns = data['display_params'];
          this.columnNames = this._generateColumnNames(this.columns);
          this.pagination = data['pagination'];
        } catch (error) {
          console.log(error)
        }

      })
  }

  searchByQuery(event) {
    let params = { page: 1, search: event, limit: 10 };
    this.modelChanged.next(params);
  }

  openModalForm(record = {}) {
    this.createFormEvent.emit(record)
  }

  private _generateColumnNames(columnKeys) {
    return columnKeys.map((column) => {
      return this._titleCase(column.split("_").join(" "))
    })
  }

  private _titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  pageChanged(event) {
    this.fetchData(event)
  }

  confirmDelete(template: TemplateRef<any>, itemToDelete, index) {
    this.itemToDelete = itemToDelete;
    this.itemToDeleteIndex = index;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    let idMapper = {
      bot: 'bot_id',
      'charging-stations': 'station_id',
      'maintenance-info': 'maintenance_id',
      'apps': 'app_id',
      'products': 'product_id',      
      'service-provider': 'unique_id',
      'remote-operator': 'unique_id',
      'user': 'email'
    };
    let endpoint = `${environment.apiURL}/${this.apiEndPoint}/delete`;
    let params = { id: this.itemToDelete[idMapper[this.apiEndPoint]] };
    let httpParams = new HttpParams({ fromObject: params });
    
    this
      .http
      .delete(endpoint, {
        params: httpParams
      })
      .subscribe(data => {
        this.data.splice(this.itemToDeleteIndex, 1)
      })
    this.modalRef.hide();
  }

  decline(): void {
    this.itemToDelete = {};
    this.modalRef.hide();
  }

  changePassword(item){
    const initialState = { userDetails: item};
    this.bsModalRef = this.modalService.show(ChangePasswordComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';    
  }

  exportToCSV(){
    let httpParams = new HttpParams({});
    let endpoint = `${environment.apiURL}/reporting/${this.apiEndPoint}`

    this
      .http
      .get(endpoint, {
        params: httpParams
      })
      .subscribe(data => {
        try {
          this.reportData = data['data'][this.keyMapper[this.apiEndPoint]];
          const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.reportData);
          const wb: XLSX.WorkBook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
          XLSX.writeFile(wb, this.apiEndPoint+".xlsx");
          
        } catch (error) {
          console.log(error)
        }

      })
  }

}

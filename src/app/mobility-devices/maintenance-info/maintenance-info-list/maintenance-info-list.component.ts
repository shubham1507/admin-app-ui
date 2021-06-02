import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateMaintenanceInfoComponent } from '../create-maintenance-info/create-maintenance-info.component';

@Component({
  selector: 'app-maintenance-info-list',
  template: `<app-list-view [apiEndPoint]="'maintenance-info'" (createFormEvent)="openMaintenanceForm($event)"></app-list-view>`
})
export class MaintenanceInfoListComponent implements OnInit {
  public bots: any = [];
  bsModalRef: BsModalRef;
  constructor( private modalService: BsModalService) { }

  ngOnInit(): void {
    
  }

  openMaintenanceForm(maintenanceDetails) {
    const initialState = { maintenanceDetails : maintenanceDetails};
    this.bsModalRef = this.modalService.show(CreateMaintenanceInfoComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

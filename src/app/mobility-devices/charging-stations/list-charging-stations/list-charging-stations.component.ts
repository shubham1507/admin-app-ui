import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateChargingStationComponent } from './../create-charging-station/create-charging-station.component';

@Component({
  selector: 'app-list-charging-stations',
  template: `<app-list-view [apiEndPoint]="'charging-stations'" (createFormEvent)="openChargingForm($event)"></app-list-view>`
})
export class ListChargingStationsComponent implements OnInit {
  public bots: any = [];
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {  }

  openChargingForm(chargingStation = null) {
    const initialState = { stationDetails: chargingStation};
    this.bsModalRef = this.modalService.show(CreateChargingStationComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}
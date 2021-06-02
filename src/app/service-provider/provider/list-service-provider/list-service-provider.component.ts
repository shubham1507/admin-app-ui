import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateServiceProviderComponent } from '../create-service-provider/create-service-provider.component';

@Component({
  selector: 'app-list-service-provider',
  template: `<app-list-view [apiEndPoint]="'service-provider'" (createFormEvent)="openServiceProviderForm($event)"></app-list-view>`
})
export class ListServiceProviderComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor( private modalService: BsModalService) { }

  ngOnInit(): void { }

  openServiceProviderForm(serviceProviderDetails) {
    const initialState = { serviceProvider: serviceProviderDetails};
    this.bsModalRef = this.modalService.show(CreateServiceProviderComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

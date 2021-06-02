import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateAppsComponent } from '../create-apps/create-apps.component';

@Component({
  selector: 'app-list-apps',
  template: `<app-list-view [apiEndPoint]="'apps'" (createFormEvent)="openAppsForm($event)"></app-list-view>`
})
export class ListAppsComponent implements OnInit {

  constructor(private modalService: BsModalService) { }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

  openAppsForm(appDetails = null) {
    const initialState = { appDetails: appDetails, 'class': 'modal-lg'};
    this.bsModalRef = this.modalService.show(CreateAppsComponent, { initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

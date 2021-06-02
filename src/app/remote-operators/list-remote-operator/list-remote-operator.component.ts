import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateRemoteOperatorComponent } from '../create-remote-operator/create-remote-operator.component';

@Component({
  selector: 'app-list-remote-operator',
  template:`<app-list-view [apiEndPoint]="'remote-operator'" (createFormEvent)="openRemoteOperatorForm($event)"></app-list-view>`
})
export class ListRemoteOperatorComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor( private modalService: BsModalService ) { }

  ngOnInit(): void {

  }

  openRemoteOperatorForm(remoteOperatorDetails) {
    const initialState = { remoteOperator: remoteOperatorDetails };
    this.bsModalRef = this.modalService.show(CreateRemoteOperatorComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

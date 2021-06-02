import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-list-user',
  //templateUrl: './list-user.component.html',
  template: `<app-list-view [apiEndPoint]="'user'" (createFormEvent)="openUserForm($event)"></app-list-view>`,
})
export class ListUserComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openUserForm(userDetails) {
    const initialState = { userDetails: userDetails };
    this.bsModalRef = this.modalService.show(CreateUserComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }

}

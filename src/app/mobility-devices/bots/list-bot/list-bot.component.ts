import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateBotComponent } from '../create-bot/create-bot.component';

import { environment } from './../../../../environments/environment'

@Component({
  selector: 'app-list-bot',
  template: `<app-list-view [apiEndPoint]="'bot'" (createFormEvent)="openBotForm($event)"></app-list-view>`,
})
export class ListBotComponent implements OnInit {
  public bots: any = [];
  public pagination: any = {}

  bsModalRef: BsModalRef;
  constructor(private http: HttpClient, private modalService: BsModalService) { }

  ngOnInit(): void {}

  openBotForm(botDetails) {
    const initialState = {botDetails : botDetails};
    this.bsModalRef = this.modalService.show(CreateBotComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

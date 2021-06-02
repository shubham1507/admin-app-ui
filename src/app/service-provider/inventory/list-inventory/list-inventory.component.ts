import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-inventory',
  template:`<app-list-view [apiEndPoint]="'inventory'"></app-list-view>`
})
export class ListInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

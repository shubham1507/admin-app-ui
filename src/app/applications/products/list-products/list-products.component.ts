import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-list-products',
  template:`<app-list-view [apiEndPoint]="'products'" (createFormEvent)="openProductForm($event)"></app-list-view>`
})
export class ListProductsComponent implements OnInit {

  constructor(private modalService: BsModalService) { }
  bsModalRef: BsModalRef;
  ngOnInit(): void {
  }

  openProductForm(maintenanceInfoDetails) {
    const initialState = { maintenanceInfoDetails : maintenanceInfoDetails};
    this.bsModalRef = this.modalService.show(CreateProductComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule, ButtonModule } from '@coreui/angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedListModule } from '../../shared/shared.module';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [ListProductsComponent, CreateProductComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    CardModule,
    GridModule,
    FormModule,
    SharedListModule
  ],
  providers:[BsModalService]
})
export class ProductsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { ListInventoryComponent } from './list-inventory/list-inventory.component';
import { SharedListModule } from '../../shared/shared.module';


@NgModule({
  declarations: [ListInventoryComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedListModule
  ]
})
export class InventoryModule { }

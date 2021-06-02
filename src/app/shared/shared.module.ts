import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule, ButtonModule } from '@coreui/angular';

import { sharedDataFilterPipe } from './../shared/list-view/data-tables-filter.pipe';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [ListViewComponent, sharedDataFilterPipe],
  imports: [
    CommonModule,
    CommonModule,    
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    CardModule,
    GridModule,
    FormModule,
    PaginationModule
  ],
  exports:[ListViewComponent]
})
export class SharedListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BotsRoutingModule } from './bots-routing.module';
import { CreateBotComponent } from './create-bot/create-bot.component';
import { ListBotComponent } from './list-bot/list-bot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule, ButtonModule } from '@coreui/angular';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { SharedListModule } from '../../shared/shared.module';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [CreateBotComponent, ListBotComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    BotsRoutingModule,
    FormsModule,
    TypeaheadModule,
    HttpClientModule,
    DataTableModule,
    CardModule,
    GridModule,
    FormModule,
    SharedListModule,
    BsDatepickerModule.forRoot()
  ],
  providers:[BsModalService]
})
export class BotsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppsRoutingModule } from './apps-routing.module';
import { ListAppsComponent } from './list-apps/list-apps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule, ButtonModule } from '@coreui/angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedListModule } from '../../shared/shared.module';
import { CreateAppsComponent } from './create-apps/create-apps.component';
//import { BotValidationFormsService } from './create-bot/validation-forms.service';

@NgModule({
  declarations: [ListAppsComponent, CreateAppsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    AppsRoutingModule,
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
export class AppsModule { }
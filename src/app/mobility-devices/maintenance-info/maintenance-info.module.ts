import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceInfoRoutingModule } from './maintenance-info-routing.module';
import { MaintenanceInfoListComponent } from './maintenance-info-list/maintenance-info-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule, ButtonModule } from '@coreui/angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SharedListModule } from '../../shared/shared.module';
import { CreateMaintenanceInfoComponent } from './create-maintenance-info/create-maintenance-info.component';
//import { BotValidationFormsService } from './create-bot/validation-forms.service';

@NgModule({
  declarations: [MaintenanceInfoListComponent, CreateMaintenanceInfoComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    MaintenanceInfoRoutingModule,
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
export class MaintenanceInfoModule { }
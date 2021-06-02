import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChargingStationsRoutingModule } from './charging-stations-routing.module';
import { ListChargingStationsComponent } from './list-charging-stations/list-charging-stations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// DataTable
import { DataTableModule } from '@pascalhonegger/ng-datatable';

import { CardModule, FormModule, GridModule, ButtonModule } from '@coreui/angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CreateChargingStationComponent } from './create-charging-station/create-charging-station.component';
import { SharedListModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ListChargingStationsComponent, CreateChargingStationComponent],
  imports: [
    CommonModule,    
    ButtonModule,
    ReactiveFormsModule,
    ChargingStationsRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    CardModule,
    GridModule,
    FormModule,
    SharedListModule,
  ],
  providers:[BsModalService]
})
export class ChargingStationsModule { }
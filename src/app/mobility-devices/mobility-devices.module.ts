import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobilityDevicesRoutingModule } from './mobility-devices-routing.module';
import { BotsModule } from './bots/bots.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaintenanceInfoModule } from './maintenance-info/maintenance-info.module';
import { ChargingStationsModule } from './charging-stations/charging-stations.module';
import { SharedListModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BotsModule,
    MaintenanceInfoModule,
    ChargingStationsModule,
    MobilityDevicesRoutingModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class MobilityDevicesModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';  

import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import {
  CalloutModule,
  CardModule,
  GridModule,
  ProgressModule,
  ButtonModule,
  DropdownModule,
  ChartModule,
  SharedModule,
  WidgetModule
} from '@coreui/angular';

import { IconModule } from '@coreui/icons-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DashboardRoutingModule,
    // ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CalloutModule,
    CardModule,
    GridModule,
    IconModule,
    ProgressModule,
    ButtonModule,
    DropdownModule,
    ChartModule,
    SharedModule,
    WidgetModule
    ],
  declarations: [
    ViewDashboardComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class DashboardModule { }

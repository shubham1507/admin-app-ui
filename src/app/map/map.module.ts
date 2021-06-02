import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { DisplayMapComponent } from './display-map/display-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { BadgeModule, CardModule } from '@coreui/angular';
import { HttpClientJsonpModule, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';


@NgModule({
  declarations: [DisplayMapComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    CardModule,
    BadgeModule,
    
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class MapModule { }

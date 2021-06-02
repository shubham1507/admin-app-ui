import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProviderRoutingModule } from './service-provider-routing.module';
import { SharedListModule } from '../shared/shared.module';
import { ProviderModule } from './provider/provider.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';
import { InventoryModule } from './inventory/inventory.module';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceProviderRoutingModule,
    ProviderModule,
    InventoryModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    BsModalService
  ]
})
export class ServiceProviderModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { AppsModule } from './apps/apps.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppsModule,
    ProductsModule,
    ApplicationsRoutingModule
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class ApplicationsModule { }

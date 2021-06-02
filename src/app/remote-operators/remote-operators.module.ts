import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteOperatorsRoutingModule } from './remote-operators-routing.module';
import { ListRemoteOperatorComponent } from './list-remote-operator/list-remote-operator.component';
import { SharedListModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { BsModalService } from 'ngx-bootstrap/modal';
import { CreateRemoteOperatorComponent } from './create-remote-operator/create-remote-operator.component';
import { Button } from 'selenium-webdriver';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [ListRemoteOperatorComponent, CreateRemoteOperatorComponent],
  imports: [
    CommonModule,
    RemoteOperatorsRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    HttpClientModule,
    DataTableModule,
    CardModule,
    GridModule,
    FormModule,
    SharedListModule,
    NgxIntlTelInputModule
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
export class RemoteOperatorsModule { }

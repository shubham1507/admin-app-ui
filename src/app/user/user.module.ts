import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../auth/token.interceptor';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { SharedListModule } from '../shared/shared.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [ListUserComponent, CreateUserComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
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
export class UserModule { }

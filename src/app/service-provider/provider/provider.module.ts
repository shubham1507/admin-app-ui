import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderRoutingModule } from './provider-routing.module';
import { ListServiceProviderComponent } from './list-service-provider/list-service-provider.component';
import { SharedListModule } from '../../shared/shared.module';
import { CreateServiceProviderComponent } from './create-service-provider/create-service-provider.component';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppsRoutingModule } from '../../applications/apps/apps-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from '@pascalhonegger/ng-datatable';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [ListServiceProviderComponent, CreateServiceProviderComponent],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    SharedListModule,
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
    SharedListModule,
    TypeaheadModule,
    NgxIntlTelInputModule
  ]
})
export class ProviderModule { }

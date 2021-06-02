import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
import { DefaultHeaderComponent } from './containers/default-layout/default-header/default-header.component';
import { DefaultHeaderDropdownAccountComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-account.component';
import { DefaultHeaderDropdownMessagesComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-messages.component';
import { DefaultHeaderDropdownNotificationsComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-notifications.component';
import { DefaultHeaderDropdownTasksComponent } from './containers/default-layout/default-header-dropdown/default-header-dropdown-tasks.component';
import { DefaultAsideComponent } from './containers/default-layout/default-aside/default-aside.component';
// Import email
import { emailLayoutComponent } from './containers';
import { emailHeaderComponent } from './containers/email-layout/email-header/email-header.component';

// Import error pages
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
// Import pages
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { HttpClientModule } from '@angular/common/http';
const APP_CONTAINERS = [
  DefaultLayoutComponent,
  DefaultHeaderComponent,
  DefaultHeaderDropdownAccountComponent,
  DefaultHeaderDropdownMessagesComponent,
  DefaultHeaderDropdownNotificationsComponent,
  DefaultHeaderDropdownTasksComponent,
  //DefaultAsideComponent,
  emailLayoutComponent,
  emailHeaderComponent,
];

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  BreadcrumbModule,
  CardModule,
  CalloutModule,
  ChartModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  LayoutModule,
  ListGroupModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  SwitchModule,
  TabsetModule,
  TogglerModule,
} from '@coreui/angular';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

// 3rd party
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';

// Import routing module
import { AppRoutingModule } from './app.routing';
import { SharedListModule } from './shared/shared.module';


@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AlertModule,
    BadgeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    CalloutModule,
    ChartModule,
    CollapseModule,
    DropdownModule,
    GridModule,
    IconModule,
    IconSetModule.forRoot(),
    SharedModule,
    LayoutModule,
    ListGroupModule,
    ProgressModule,
    SidebarModule,
    SwitchModule,
    TabsetModule,
    TogglerModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(),
    // ToastContainerModule,
    FormModule,
    SharedListModule
  ],
  exports: [SharedModule],

  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },    
    IconSetService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

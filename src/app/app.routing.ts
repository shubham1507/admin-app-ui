import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent, emailLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import {   AuthGuardService  } from './auth/auth-guard.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  {
    path: '',
    canActivate:[AuthGuardService],
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'mobility-devices',
        canActivate: [AuthGuardService],
        loadChildren: () =>
          import('./mobility-devices/mobility-devices.module').then(
            (m) => m.MobilityDevicesModule
          ),
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path:'apps',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./applications/applications.module').then((m) => m.ApplicationsModule)
      },
      {
        path:'reports',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./reports/reports.module').then((m) => m.ReportsModule)
      },
      {
        path:'service-providers',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./service-provider/service-provider.module').then((m) => m.ServiceProviderModule)
      },
      {
        path: 'remote-operators',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./remote-operators/remote-operators.module').then((m) => m.RemoteOperatorsModule)
      },
      {
        path: 'maps',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./map/map.module').then((m) => m.MapModule)
      },
      {
        path: 'user',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule),
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule),
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/chartjs/chartjs.module').then((m) => m.ChartjsModule),
      },
      {
        path: 'editors',
        loadChildren: () =>
          import('./views/editors/editors.module').then((m) => m.EditorsModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'google-maps',
        loadChildren: () =>
          import('./views/maps/maps.module').then((m) => m.MapsModule),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then(
            (m) => m.NotificationsModule
          ),
      },
      {
        path: 'plugins',
        loadChildren: () =>
          import('./views/plugins/plugins.module').then((m) => m.PluginsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./views/tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule),
      },
      {
        path: 'apps',
        loadChildren: () =>
          import('./views/apps/apps.module').then((m) => m.AppsModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

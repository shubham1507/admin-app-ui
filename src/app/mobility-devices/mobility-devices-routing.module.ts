import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBotComponent } from './bots/list-bot/list-bot.component';
import { ListChargingStationsComponent } from './charging-stations/list-charging-stations/list-charging-stations.component';
import { MaintenanceInfoListComponent } from './maintenance-info/maintenance-info-list/maintenance-info-list.component';

const routes: Routes = [
  {
    path: 'bots',
    children: [
      {
        path: '',
        component: ListBotComponent
      }
    ]
  },
  {
    path: 'maintenance-info',
    children: [
      {
        path: '',
        component: MaintenanceInfoListComponent
      }
    ]
  },
  {
    path: 'charging-stations',
    children: [
      {
        path: '',
        component: ListChargingStationsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobilityDevicesRoutingModule { }

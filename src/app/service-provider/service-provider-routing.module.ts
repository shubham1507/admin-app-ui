import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListInventoryComponent } from './inventory/list-inventory/list-inventory.component';
import { ListServiceProviderComponent } from './provider/list-service-provider/list-service-provider.component';

const routes: Routes = [
  {
    path: 'service-provider',
    component: ListServiceProviderComponent
  },
  {
    path: 'inventory',
    component: ListInventoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceProviderRoutingModule { }

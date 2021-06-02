import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayMapComponent } from './display-map/display-map.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }

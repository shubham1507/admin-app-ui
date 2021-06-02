import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRemoteOperatorComponent } from './list-remote-operator/list-remote-operator.component';

const routes: Routes = [
  {
    path: 'operators',
    component: ListRemoteOperatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteOperatorsRoutingModule { }

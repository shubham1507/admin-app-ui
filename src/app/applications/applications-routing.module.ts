import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAppsComponent } from './apps/list-apps/list-apps.component';
import { ListProductsComponent } from './products/list-products/list-products.component';

const routes: Routes = [
  {
    path: 'apps',
    children: [
      {
        path: '',
        component: ListAppsComponent
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ListProductsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBotComponent } from './list-bot/list-bot.component';

const routes: Routes = [
  {
    path: 'bots/list',
    component: ListBotComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BotsRoutingModule { }

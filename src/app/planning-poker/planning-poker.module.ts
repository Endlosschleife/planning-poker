import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { InitPageComponent } from './components/init-page/init-page.component';
import { PokerPageComponent } from './components/poker-page/poker-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InitPageComponent
  }, {
    path: ':id',
    component: PokerPageComponent
  }
];

@NgModule({
  declarations: [InitPageComponent, PokerPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanningPokerModule { }

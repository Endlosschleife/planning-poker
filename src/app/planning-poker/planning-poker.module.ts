import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { InitPageComponent } from './components/init-page/init-page.component';
import { PlanningPokerComponent } from './planning-poker.component';
import { UserService } from "./services/user.service";
import { CreateUserComponent } from "./components/create-user/create-user.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InitPageComponent
  }, {
    path: ':id',
    component: PlanningPokerComponent
  }
];

@NgModule({
  declarations: [
    InitPageComponent,
    PlanningPokerComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ]
})
export class PlanningPokerModule {
}

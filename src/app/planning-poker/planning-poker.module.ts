import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { InitPageComponent } from './components/init-page/init-page.component';
import { PlanningPokerComponent } from './planning-poker.component';
import { UserService } from "./services/user.service";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { FormsModule } from "@angular/forms";
import { PokerCardComponent } from './components/poker-card/poker-card.component';
import { UserTileComponent } from './components/user-tile/user-tile.component';
import { CardSelectionComponent } from './components/card-selection/card-selection.component';
import { ObserverViewComponent } from './components/observer-view/observer-view.component';

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
    CreateUserComponent,
    PokerCardComponent,
    UserTileComponent,
    CardSelectionComponent,
    ObserverViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class PlanningPokerModule {
}

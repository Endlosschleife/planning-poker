import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./models/user.model";
import { UserService } from "./services/user.service";
import { PokerCardEnum } from "./models/poker-card.enum";
import { CardService } from "./services/card.service";
import { SelectedCard } from "./models/selected-card.model";
import { switchMap } from "rxjs/operators";

@Component({
  selector: 'app-planning-poker',
  templateUrl: './planning-poker.component.html',
  styleUrls: ['./planning-poker.component.scss']
})
export class PlanningPokerComponent implements OnInit {

  planningId: string;
  users$: Observable<User[]>;
  isMember$: Observable<boolean>;
  currentUser?: User;
  selectedCard$: Observable<SelectedCard>;

  constructor(private userService: UserService,
              private cardService: CardService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.planningId = this.activatedRoute.snapshot.params['id'];
    this.users$ = this.userService.getUsers(this.planningId);
    this.isMember$ = this.userService.isMember(this.planningId);

    this.selectedCard$ = this.userService.getCurrentUser(this.planningId).pipe(
      switchMap(user => this.cardService.getSelectedCard(this.planningId, user.id))
    );

    this.userService.getCurrentUser(this.planningId).subscribe(user => this.currentUser = user);
  }

  selectedCardChanged(pokerCard: PokerCardEnum) {
    this.cardService.selectCard(this.planningId, pokerCard, this.currentUser.id);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { combineLatest, Observable, zip } from "rxjs";
import { User } from "./models/user.model";
import { UserService } from "./services/user.service";
import { PokerCardEnum } from "./models/poker-card.enum";
import { CardService } from "./services/card.service";
import { SelectedCard } from "./models/selected-card.model";
import { filter, flatMap, map, switchMap, tap, toArray } from "rxjs/operators";

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
  userPokerCards: SelectedCard[] = [];
  isRevealed$: Observable<boolean>;

  constructor(private userService: UserService,
              private cardService: CardService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.planningId = this.activatedRoute.snapshot.params['id'];
    this.users$ = this.userService.getUsers(this.planningId);
    this.isMember$ = this.userService.isMember(this.planningId);

    this.selectedCard$ = this.userService.getCurrentUser(this.planningId).pipe(
      filter(user => !!user),
      switchMap(user => this.cardService.getSelectedCard(this.planningId, user.id))
    );

    this.userService.getCurrentUser(this.planningId)
      .subscribe(user => this.currentUser = user);

    this.cardService.getSelectedPokerCards(this.planningId)
      .subscribe(cards => this.userPokerCards = cards);

    this.isRevealed$ = combineLatest([this.userService.getUsers(this.planningId), this.cardService.getSelectedPokerCards(this.planningId)]).pipe(
      map(([users, selectedCards]) => users
        .filter(user => !selectedCards.find(selectedCard => selectedCard.userId === user.id))
      ),
      map(usersWithNoSelection => usersWithNoSelection.length === 0)
    );
  }

  selectedCardChanged(pokerCard: PokerCardEnum) {
    this.cardService.selectCard(this.planningId, pokerCard, this.currentUser.id);
  }

  getUserPokerCard(user: User): PokerCardEnum {
    var card = this.userPokerCards.find(card => card.userId === user.id);
    if (!card) {
      return;
    }
    return PokerCardEnum[card.card];
  }

  resetCards() {
    this.cardService.deleteSelectedCards(this.planningId);
  }

}

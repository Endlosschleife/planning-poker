import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokerCardEnum } from "../../models/poker-card.enum";
import { SelectedCard } from "../../models/selected-card.model";

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.scss']
})
export class CardSelectionComponent implements OnInit {

  @Input()
  selectedCard: SelectedCard;

  @Output()
  selectedCardChanged = new EventEmitter<PokerCardEnum>();

  pokerCardEnum = PokerCardEnum;
  cards = Object.keys(PokerCardEnum);

  constructor() {
  }

  ngOnInit(): void {
  }

  cardClicked(pokerCard: PokerCardEnum) {
    if(this.isCardSelected(pokerCard)) {
      this.selectedCardChanged.emit(null); // deselect
    } else {
      this.selectedCardChanged.emit(pokerCard);
    }
  }

  isCardSelected(pokerCard: PokerCardEnum) {
    return pokerCard.getKey() === this.selectedCard?.card;
  }

}

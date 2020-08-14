import { Component, OnInit } from '@angular/core';
import { PokerCardEnum } from "../../models/poker-card.enum";

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.scss']
})
export class CardSelectionComponent implements OnInit {

  pokerCardEnum = PokerCardEnum;
  cards = Object.keys(PokerCardEnum);

  constructor() {
  }

  ngOnInit(): void {
  }

}

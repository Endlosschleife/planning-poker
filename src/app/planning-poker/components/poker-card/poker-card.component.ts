import { Component, Input, OnInit } from '@angular/core';
import { PokerCardEnum } from "../../models/poker-card.enum";

@Component({
  selector: 'app-poker-card',
  templateUrl: './poker-card.component.html',
  styleUrls: ['./poker-card.component.scss']
})
export class PokerCardComponent implements OnInit {

  @Input()
  card: PokerCardEnum;

  constructor() { }

  ngOnInit(): void {
  }

}

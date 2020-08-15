import { Component, Input, OnInit } from '@angular/core';
import { User } from "../../models/user.model";
import { PokerCardEnum } from "../../models/poker-card.enum";

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.scss']
})
export class UserTileComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  userPokerCard: PokerCardEnum;

  constructor() { }

  ngOnInit(): void {
  }

}

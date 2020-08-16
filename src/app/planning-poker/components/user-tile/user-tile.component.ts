import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Input()
  reveal: boolean;

  @Output()
  removeUserClicked = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  removeUser() {
    this.removeUserClicked.emit(this.user);
  }

}

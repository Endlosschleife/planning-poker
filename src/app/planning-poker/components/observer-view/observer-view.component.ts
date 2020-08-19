import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-observer-view',
  templateUrl: './observer-view.component.html',
  styleUrls: ['./observer-view.component.scss']
})
export class ObserverViewComponent implements OnInit {

  @Input()
  planningId: string;

  @Input()
  user: User;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  play() {
    this.userService.setObserver(this.planningId, this.user.id, false);
  }

}

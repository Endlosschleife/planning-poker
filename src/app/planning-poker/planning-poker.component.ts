import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./models/user.model";
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-planning-poker',
  templateUrl: './planning-poker.component.html',
  styleUrls: ['./planning-poker.component.scss']
})
export class PlanningPokerComponent implements OnInit {

  planningId: string;
  users$: Observable<User[]>;
  isMember$: Observable<boolean>;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.planningId = this.activatedRoute.snapshot.params['id'];
    this.users$ = this.userService.getUsers(this.planningId);
    this.isMember$ = this.userService.isMember(this.planningId);

    // if(!this.userService.isMember(id)) {
    //   this.userService.createUser(id, 'Torben');
    // }

  }

}

import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Input()
  planningId: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  create() {
    this.userService.createUser(this.planningId, 'Torben');
  }

}

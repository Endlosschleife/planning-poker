import { Component, Input, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

class CreateUserForm {
  constructor(public name: string) {
  }
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Input()
  planningId: string;

  model = new CreateUserForm('');

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.userService.createUser(this.planningId, this.model.name);
  }

}

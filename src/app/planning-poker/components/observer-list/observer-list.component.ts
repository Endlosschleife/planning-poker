import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { User } from "../../models/user.model";

@Component({
  selector: 'app-observer-list',
  templateUrl: './observer-list.component.html',
  styleUrls: ['./observer-list.component.scss']
})
export class ObserverListComponent implements OnInit {

  @Input()
  observers$: Observable<User[]>;

  constructor() { }

  ngOnInit(): void {
  }

}

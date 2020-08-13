import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as uuid from 'uuid';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html',
  styleUrls: ['./init-page.component.scss']
})
export class InitPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const id = uuid.v4();
    this.router.navigate(['/', id]);
  }

}

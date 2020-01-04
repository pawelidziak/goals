import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-new-goal',
  templateUrl: './new-goal.component.html',
  styleUrls: ['./new-goal.component.scss']
})
export class NewGoalComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {}
  ngOnInit() {}

  goBack() {
    this.routerExtensions.back();
  }
}

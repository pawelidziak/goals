import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-goals',
  templateUrl: './no-goals.component.html',
  styleUrls: ['./no-goals.component.scss'],
})
export class NoGoalsComponent implements OnInit {
  @Input() label: string;
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}

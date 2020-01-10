import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorityComponent implements OnInit {
  priority = {
    icon: 'mdi-priority-high',
    iconColors: ['#F44336', '#FF9800', '#2196F3', '#9E9E9E'],
    items: ['A - High', 'B - Medium', 'C - Low', 'D - None']
  };

  constructor() {}

  ngOnInit(): void {}
}

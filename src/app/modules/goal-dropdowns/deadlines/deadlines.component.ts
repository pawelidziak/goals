import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlinesComponent implements OnInit {
  deadline = {
    icon: 'mdi-date-range',
    iconColors: ['#3F51B5', '#009688', '#673AB7', '#795548'],
    items: ['Today', 'Tomorrow', 'Long-term', 'Todo']
  };

  constructor() {}

  ngOnInit(): void {}

  onItemChanged(index: number) {
    console.log('onItemChanged', index);
  }
}

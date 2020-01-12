import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-repeats',
  templateUrl: './repeats.component.html',
  styleUrls: ['./repeats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepeatsComponent implements OnInit {
  repeats = {
    icon: 'mdi-autorenew',
    iconColors: ['#F44336', '#FF9800', '#2196F3', '#9E9E9E'],
    items: ['None', 'Daily', 'Weekly', 'Nonstandard']
  };

  constructor() {}

  ngOnInit(): void {}
}

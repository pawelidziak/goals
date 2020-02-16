import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Deadline, DeadlinesFacade } from './+state';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlinesComponent implements OnInit {
  icon = 'mdi-dashboard';
  items$ = this.facade.deadlines$;

  constructor(private facade: DeadlinesFacade) {}

  ngOnInit(): void {
    this.facade.loadAll(); // should be call at goals lvl?
  }

  onItemChanged(deadline: Deadline) {
    this.facade.selectDeadline(deadline.id);
  }
}

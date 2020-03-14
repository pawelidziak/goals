import { Component, ChangeDetectionStrategy } from '@angular/core';

import { GoalDropdownsBase } from './../goal-dropdowns.base';
import { DeadlinesFacade } from './+state';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeadlinesComponent extends GoalDropdownsBase {
  icon = 'mdi-dashboard';

  constructor(private deadlinesFacade: DeadlinesFacade) {
    super(deadlinesFacade);
  }
}

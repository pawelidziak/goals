import { Component, ChangeDetectionStrategy } from '@angular/core';

import { GoalDropdownsBase } from './../goal-dropdowns.base';
import { PrioritiesFacade } from './+state';

@Component({
  selector: 'app-priority',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrioritiesComponent extends GoalDropdownsBase {
  icon = 'mdi-priority-high';

  constructor(private prioritiesFacade: PrioritiesFacade) {
    super(prioritiesFacade);
  }
}

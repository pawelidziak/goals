import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Repeat, RepeatsFacade } from './+state';
import { GoalDropdownsBase } from './../goal-dropdowns.base';

@Component({
  selector: 'app-repeats',
  templateUrl: './repeats.component.html',
  styleUrls: ['./repeats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepeatsComponent extends GoalDropdownsBase {
  icon = 'mdi-autorenew';

  constructor(private repeatsFacade: RepeatsFacade) {
    super(repeatsFacade);
  }

}

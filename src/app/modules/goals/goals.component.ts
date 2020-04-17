import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { LayoutFacade } from '@modules/layout/+state/layout.facade';

import { Goal, GoalsFacade } from './+state';
import { DeadlinesFacade } from '../goal-dropdowns/deadlines/+state';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalsComponent implements OnInit {
  showAddGoalComponent$: Observable<boolean> = this.layoutFacade.isComponentShown('ADD_GOAL_MODAL');
  doneGoals$: Observable<Goal[]> = this.goalsFacade.doneGoals$;
  undoneGoals$: Observable<Goal[]> = this.goalsFacade.undoneGoals$;
  deadline$ = this.deadlinesFacade.selectedItem$;

  constructor(
    private goalsFacade: GoalsFacade,
    private deadlinesFacade: DeadlinesFacade,
    private layoutFacade: LayoutFacade
  ) {}

  ngOnInit() {
    // todo add unsubscribe or set filter in other place (resolver)
    this.deadline$.subscribe((deadline) =>
      this.goalsFacade.filterGoals(deadline)
    );
  }

  showAddGoalComponent() {
    this.layoutFacade.hideComponent('BOTTOM_NAV');
    this.layoutFacade.showComponent('ADD_GOAL_MODAL');
  }

  hideAddGoalComponent() {
    this.layoutFacade.showComponent('BOTTOM_NAV');
    this.layoutFacade.hideComponent('ADD_GOAL_MODAL');
  }
}

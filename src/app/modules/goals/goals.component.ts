import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Goal, GoalsFacade } from './+state';
import { AddGoalModalFacade } from '@src/app/modules/add-goal-modal/+state/add-goal-modal.facade';
import { BottomNavigationFacade } from '@modules/bottom-navigation/+state/bottom-navigation.facade';
import { DeadlinesFacade } from '../goal-dropdowns/deadlines/+state';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalsComponent implements OnInit {
  showAddGoalComponent$: Observable<boolean> = this.addGoalModalFacade.show$;
  doneGoals$: Observable<Goal[]> = this.goalsFacade.doneGoals$;
  undoneGoals$: Observable<Goal[]> = this.goalsFacade.undoneGoals$;
  deadline$ = this.deadlinesFacade.selectedItem$;

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private goalsFacade: GoalsFacade,
    private addGoalModalFacade: AddGoalModalFacade,
    private deadlinesFacade: DeadlinesFacade
  ) {}

  ngOnInit() {
    // todo add unsubscribe or set filter in other place (resolver)
    this.deadline$.subscribe((deadline) =>
      this.goalsFacade.filterGoals(deadline)
    );
  }

  showAddGoalComponent() {
    this.bottomNavFacade.hideBottomNav();
    this.addGoalModalFacade.showAddGoal();
  }

  hideAddGoalComponent() {
    this.bottomNavFacade.showBottomNav();
    this.addGoalModalFacade.hideAddGoal();
  }
}

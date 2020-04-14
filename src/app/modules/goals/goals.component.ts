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
  goals$: Observable<Goal[]> = this.goalsFacade.filteredGoals$;
  goals: Goal[];

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private goalsFacade: GoalsFacade,
    private addGoalModalFacade: AddGoalModalFacade,
    private deadlinesFacade: DeadlinesFacade
  ) {}

  ngOnInit() {
    this.deadline$.subscribe((deadline) =>
      this.goalsFacade.filterGoals(deadline)
    );
    this.goalsFacade.filteredGoals$.subscribe(goals => this.goals = goals)
    // todo add unsubscribe or set filter in other place (resolver)
  }

  showAddGoalComponent() {
    this.bottomNavFacade.hideBottomNav();
    this.addGoalModalFacade.showAddGoal();
  }

  hideAddGoalComponent() {
    this.bottomNavFacade.showBottomNav();
    this.addGoalModalFacade.hideAddGoal();
  }

  onGoalStateChange(goal: Goal) {
    // this.goalsFacade.editGoal(goal);
  }

  getUndoneGoals() {
    return this.goals.filter(goal => !goal.done);
  }
  
  getDoneGoals() {
    return this.goals.filter(goal => goal.done);
  }
}

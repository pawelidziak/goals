import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Goal, GoalsFacade } from './+state';
import { AddGoalFacade } from '@modules/add-goal/+state/add-goal.facade';
import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent implements OnInit {
  showAddGoalComponent$: Observable<boolean> = this.addGoalFacade.show$;
  goals$: Observable<Goal[]>;

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private goalsFacade: GoalsFacade,
    private addGoalFacade: AddGoalFacade
  ) {}

  ngOnInit() {
    this.goals$ = this.goalsFacade.allGoals$;
  }

  showAddGoalComponent() {
    this.bottomNavFacade.hideBottomNav();
    this.addGoalFacade.showAddGoal();
  }

  hideAddGoalComponent() {
    this.bottomNavFacade.showBottomNav();
    this.addGoalFacade.hideAddGoal();
  }

  onGoalSend(name: string) {
    // console.log(name);
    this.goalsFacade.addGoal(name);
  }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';

import { Goal, GoalsFacade } from './+state';
import { AddGoalModalFacade } from '@src/app/modules/add-goal-modal/+state/add-goal-modal.facade';
import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent implements OnInit {
  showAddGoalComponent$: Observable<boolean> = this.addGoalModalFacade.show$;
  goals$: Observable<Goal[]>;

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private goalsFacade: GoalsFacade,
    private addGoalModalFacade: AddGoalModalFacade
  ) {}

  ngOnInit() {
    this.goals$ = this.goalsFacade.allGoals$;
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

import { GoalsFacade } from '@pages/goals/+state';
import { Observable } from 'rxjs';
import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Goal } from './+state';
import { AddGoalFacade } from '@modules/add-goal/+state/add-goal.facade';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent implements OnInit {
  showAddGoalComponent$: Observable<boolean> = this.addGoalFacade.show$;

  // dropDownItems = [
  //   { id: '1', name: 'Today', color: 'red' },
  //   { id: '2', name: 'Tomorrow', color: 'red' },
  //   { id: '3', name: 'Long-term', color: 'red' },
  //   { id: '4', name: 'Todo', color: 'red' }
  // ];
  dropDownItems = [
    {
      id: 'wz4GeN0ltDdNmMZjlkV9',
      color: '#3F51B5',
      name: 'Today'
    }
  ];
  goals$: Observable<Goal[]>;

  constructor(
    private bottomNavFacade: BottomNavigationFacade,
    private goalsFacade: GoalsFacade,
    private addGoalFacade: AddGoalFacade
  ) {}

  ngOnInit() {
    this.goals$ = this.goalsFacade.allGoals$;
    // this.goals$.subscribe(res => console.log(res));
  }

  onDropDownSelect(e) {
    // console.log(e);
  }

  showAddGoalComponent() {
    this.bottomNavFacade.hideBottomNav();
    this.addGoalFacade.showAddGoal();
  }

  hideAddGoalComponent() {
    this.bottomNavFacade.showBottomNav();
    this.addGoalFacade.hideAddGoal();
  }

  onItemChanged(e) {
    console.log(e);
  }
}

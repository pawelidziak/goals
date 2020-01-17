import { GoalsFacade } from './+state/goals.facade';
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

  dropDown = [
    { id: '1', name: 'Today' },
    { id: '2', name: 'Tomorrow' },
    { id: '3', name: 'Long-term' },
    { id: '4', name: 'Todo' }
  ];
  dropDownItems = this.dropDown.map(item => item.name);
  dropDownSelectedId = 0;

  goals$: Observable<Goal[]>;

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
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

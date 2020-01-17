import { GoalsFacade } from './+state/goals.facade';
import { Observable } from 'rxjs';
import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Goal } from './+state';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent implements OnInit {

  dropDownItems = ['a', 'b'];
  dropDownSelectedId = 0;

  goals$: Observable<Goal[]>;

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private bottomNavFacade: BottomNavigationFacade,
    private goalsFacade: GoalsFacade
  ) {}

  ngOnInit() {
    this.goals$ = this.goalsFacade.allGoals$;
    this.goals$.subscribe(res => console.log(res));
  }

  onDropDownSelect(e) {
    // console.log(e);
  }
}

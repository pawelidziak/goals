import { Observable } from 'rxjs';
import { BottomNavigationFacade } from '@core/bottom-navigation/+state/bottom-navigation.facade';
import { APP_ROUTES } from '@core/routes';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { AddGoalFacade } from '../add-goal/+state/add-goal.facade';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalsComponent implements OnInit {
  showAddGoalComponent$: Observable<boolean> = this.addGoalFacade.show$;

  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute,
    private bottomNavFacade: BottomNavigationFacade,
    private addGoalFacade: AddGoalFacade
  ) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.navigateToTabView();
  }

  private navigateToTabView() {
    this.routerExtensions.navigate(
      [
        {
          outlets: {
            playerTab: [APP_ROUTES.PLAYERS],
            teamTab: [APP_ROUTES.TEAMS]
          }
        }
      ],
      { relativeTo: this.activeRoute }
    );
  }

  showAddGoalComponent() {
    this.bottomNavFacade.hideBottomNav();
    this.addGoalFacade.showAddGoal();
  }

  hideAddGoalComponent() {
    this.bottomNavFacade.showBottomNav();
    this.addGoalFacade.hideAddGoal();
  }

  onTabChanged(tabIndex: number) {
  }
}

import { APP_ROUTES } from '@core/routes';
import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  constructor(
    private page: Page,
    private routerExtensions: RouterExtensions,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
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

  onTap() {
    this.routerExtensions.navigate(['new-goal'], {
      transition: {
        name: 'fade'
      }
    });
  }
}

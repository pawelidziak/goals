import { BottomNavigationFacade } from './+state/bottom-navigation.facade';
import { APP_ROUTES } from '@core/routes';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationComponent implements OnInit {
  public showNav$: Observable<boolean>;

  public tabs = [
    { label: 'Progress', path: APP_ROUTES.TEAMS, icon: 'mdi-trending-up' },
    { label: 'Goals', path: APP_ROUTES.GOALS, icon: 'mdi-stars' },
    { label: 'Settings', path: APP_ROUTES.SETTINGS, icon: 'mdi-settings' }
  ];
  private _activatedUrl: string;

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions,
    private bottomNavFacade: BottomNavigationFacade
  ) {}

  ngOnInit() {
    this.showNav$ = this.bottomNavFacade.show$;
    this._activatedUrl = APP_ROUTES.GOALS;
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(
        (event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects)
      );
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade'
      },
      clearHistory: true
    });
  }

  isComponentSelected = (url: string): boolean =>
    this._activatedUrl.split('/')[1] === url;
}

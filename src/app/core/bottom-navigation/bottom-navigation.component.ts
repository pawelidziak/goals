import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-bottom-navigation',
  templateUrl: './bottom-navigation.component.html',
  styleUrls: ['./bottom-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BottomNavigationComponent implements OnInit {
  public tabs = [
    { label: 'Progress', path: '/teams', icon: 'mdi-trending-up' },
    { label: 'Goals', path: '/goals', icon: 'mdi-stars' },
    { label: 'Settings', path: '/movies', icon: 'mdi-settings' }
  ];
  private _activatedUrl: string;

  constructor(
    private router: Router,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this._activatedUrl = '/goals';
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
  }

  onNavItemTap(navItemRoute: string) {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade'
      },
      clearHistory: true
    });
  }

  isComponentSelected = (url: string): boolean => this._activatedUrl.split('/')[1] === url.split('/')[1];

}

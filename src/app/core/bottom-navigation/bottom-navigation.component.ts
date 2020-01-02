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
    { label: 'Goals', path: '/goals', icon: 'mdi-bluetooth' },
    { label: 'Teams', path: '/teams', icon: 'mdi-bluetooth' },
    { label: 'Players', path: '/players', icon: 'mdi-bluetooth' },
    { label: 'Movies', path: '/movies', icon: 'mdi-bluetooth' }
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

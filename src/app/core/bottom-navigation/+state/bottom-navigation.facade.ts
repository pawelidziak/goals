import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromNottomNavigation from './bottom-navigation.reducer';
import * as BottomNavigationSelectors from './bottom-navigation.selectors';
import * as BottomNavigationActions from './bottom-navigation.actions';

@Injectable()
export class BottomNavigationFacade {
  show$ = this.store.select(BottomNavigationSelectors.getShow);

  constructor(private store: Store<fromNottomNavigation.BottomNavigationState>) {}

  showBottomNav() {
    this.store.dispatch(BottomNavigationActions.showBottomNav());
  }

  hideBottomNav() {
    this.store.dispatch(BottomNavigationActions.hideBottomNav());
  }
}

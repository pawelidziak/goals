import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromLayout from './layout.reducer';
import * as LayoutSelectors from './layout.selectors';
import * as LayoutActions from './/layout.actions';

@Injectable()
export class LayoutFacade {
  shown$ = this.store.select(LayoutSelectors.getShownComponents);

  constructor(private store: Store<fromLayout.LayoutState>) {}

  showComponent(name: string) {
    this.store.dispatch(LayoutActions.showComponent({ name }));
  }

  hideComponent(name: string) {
    this.store.dispatch(LayoutActions.hideComponent({ name }));
  }

  isComponentShown = (name: string): Observable<boolean> =>
    this.store.select(LayoutSelectors.isComponentShown, { name })
}

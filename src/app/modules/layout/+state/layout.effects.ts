import { LayoutFacade } from './layout.facade';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store, Action } from '@ngrx/store';
import {
  map,
  mergeMap,
  catchError,
  concatMap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';

import * as LayoutActions from './layout.actions';
import * as LayoutReducer from './layout.reducer';
import * as LayoutSelectors from './layout.selectors';

@Injectable()
export class LayoutEffects {
  showComponent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.showComponent),
      withLatestFrom(
        this.layoutStore.pipe(select(LayoutSelectors.getShownComponents)),
      ),
      mergeMap(([action, showedComponents]) => {
        // if there is already component name fire `Already Shown Action`,
        // otherwise fire `Add To `Shown`
        const index = showedComponents.findIndex(
          (name) => name === action.name
        );
        return of(index !== -1).pipe(
          map((exists) =>
            exists
              ? LayoutActions.alreadyShown()
              : LayoutActions.addToShown({ name: action.name })
          ),
          catchError(() => LayoutActions.showComponentFailure)
        );
      })
    )
  );

  hideComponent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.hideComponent),
      withLatestFrom(
        this.layoutStore.pipe(select(LayoutSelectors.getShownComponents))
      ),
      mergeMap(([action, shownComponents]) => {
        // if there is component name fire `Remove From Shown`,
        // otherwise fire `Component Not Shown`
        const index = shownComponents.findIndex(
          (name) => name === action.name
        );
        return of(index !== -1).pipe(
          map((exists) =>
            exists
              ? LayoutActions.removeFromShown({ name: action.name })
              : LayoutActions.componentNotShown()
          ),
          catchError(() => LayoutActions.hideComponentFailure)
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private layoutFacade: LayoutFacade,
    private layoutStore: Store<LayoutReducer.LayoutState>
  ) {}
}

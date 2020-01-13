import { GoalsListService } from './../goals-list.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GoalsListActions from './goals-list.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class GoalsListEffects {
  loadGoalsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsListActions.loadGoalList),
      mergeMap(() =>
        this.service.getAll().pipe(
          map(goals =>
            GoalsListActions.loadGoalListSuccess({ goalsList: goals })
          ),
          catchError(() => GoalsListActions.loadGoalListFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: GoalsListService) {}
}

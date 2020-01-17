import { GoalsService } from '../services/goals.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as GoalsActions from './goals.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class GoalsEffects {
  loadGoals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.loadGoals),
      mergeMap(() =>
        this.service.getAll().pipe(
          map(goals => GoalsActions.loadGoalsSuccess({ goals: goals })),
          catchError(() => GoalsActions.loadGoalsFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: GoalsService) {}
}

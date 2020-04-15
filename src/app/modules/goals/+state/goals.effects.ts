import { getGoalById } from './goals.selectors';
import { GoalsState } from '@modules/goals/+state';
import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import {
  map,
  mergeMap,
  catchError,
  concatMap,
  withLatestFrom,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { GoalsService } from '../services/goals.service';
import * as GoalsActions from './goals.actions';
import * as fromDeadlines from '@modules/goal-dropdowns/deadlines/+state';
import * as fromPriorities from '@modules/goal-dropdowns/priorities/+state';
import * as fromRepeats from '@modules/goal-dropdowns/repeats/+state';

@Injectable()
export class GoalsEffects {
  loadGoals$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.loadGoals),
      mergeMap(() =>
        this.service.getAll().pipe(
          map((goals) =>
            GoalsActions.loadGoalsSuccess({
              goals: goals.sort((a, b) => +a.done - +b.done),
            })
          ),
          catchError(() => GoalsActions.loadGoalsFailure)
        )
      )
    )
  );

  addGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.addGoal),
      concatMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.deadlinesStore.pipe(select(fromDeadlines.getSelected)),
            this.prioritiesStore.pipe(select(fromPriorities.getSelected)),
            this.repeatsStore.pipe(select(fromRepeats.getSelected))
          )
        )
      ),
      mergeMap(([action, deadline, priority, repeat]) =>
        this.service
          .addGoal({
            name: action.name,
            deadline: deadline,
            priority: priority,
            repeat: repeat,
            done: false,
          })
          .pipe(
            map((id) => GoalsActions.addGoalSuccess({ id })),
            catchError(() => GoalsActions.addGoalFailure)
          )
      )
    )
  );

  doneGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.doneGoal),
      mergeMap((action) =>
        this.service.doneGoal(action.id).pipe(
          map(() => GoalsActions.doneGoalSuccess()),
          catchError(() => GoalsActions.doneGoalFailure)
        )
      )
    )
  );

  undoneGoal$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoalsActions.undoneGoal),
      mergeMap((action) =>
        this.service.undoneGoal(action.id).pipe(
          map(() => GoalsActions.undoneGoalSuccess()),
          catchError(() => GoalsActions.undoneGoalFailure)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: GoalsService,
    private deadlinesStore: Store<fromDeadlines.DeadlinesState>,
    private prioritiesStore: Store<fromPriorities.PrioritiesState>,
    private repeatsStore: Store<fromRepeats.RepeatsState>
  ) {}
}

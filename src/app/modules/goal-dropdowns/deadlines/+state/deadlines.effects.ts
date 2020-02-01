import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DeadlinesService } from '../services/deadlines.service';
import * as DeadlinesActions from './deadlines.actions';

@Injectable()
export class DeadlinesEffects {
  loadDeadlines$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeadlinesActions.loadDeadlines),
      mergeMap(() =>
        this.service.getDeadlines().pipe(
          map(deadlines =>
            DeadlinesActions.loadDeadlinesSuccess({ deadlines: deadlines })
          ),
          catchError(() => DeadlinesActions.loadDeadlinesFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: DeadlinesService) {}
}

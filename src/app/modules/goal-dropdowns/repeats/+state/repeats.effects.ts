import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { RepeatsService } from '../services/repeats.service';
import * as RepeatsActions from './repeats.actions';

@Injectable()
export class RepeatsEffects {
  loadRepeats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepeatsActions.loadRepeats),
      mergeMap(() =>
        this.service.getRepeats().pipe(
          map(repeats =>
            RepeatsActions.loadRepeatsSuccess({ repeats: repeats })
          ),
          catchError(() => RepeatsActions.loadRepeatsFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: RepeatsService) {}
}

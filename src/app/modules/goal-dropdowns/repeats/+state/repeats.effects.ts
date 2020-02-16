import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError } from 'rxjs/operators';

import { RepeatsService } from '../services/repeats.service';
import * as RepeatsActions from './repeats.actions';

@Injectable()
export class RepeatsEffects {
  loadRepeats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RepeatsActions.loadRepeats),
      mergeMap(() =>
        this.service.getRepeats().pipe(
          mergeMap(repeats => [
            RepeatsActions.loadRepeatsSuccess({ repeats: repeats }),
            RepeatsActions.selectRepeat({ id: repeats[0].id })
          ]),
          catchError(() => RepeatsActions.loadRepeatsFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: RepeatsService) {}
}

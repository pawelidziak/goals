import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError } from 'rxjs/operators';

import { PrioritiesService } from '../services/priorities.service';
import * as PrioritiesActions from './priorities.actions';

@Injectable()
export class PrioritiesEffects {
  loadPriorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PrioritiesActions.loadPriorities),
      mergeMap(() =>
        this.service.getPriorities().pipe(
          mergeMap(prorities => [
            PrioritiesActions.loadPrioritiesSuccess({ prorities: prorities }),
            PrioritiesActions.selectPriority({ id: prorities[0].id })
          ]),
          catchError(() => PrioritiesActions.loadPrioritiesFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: PrioritiesService) {}
}

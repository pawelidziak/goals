import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { PrioritiesService } from '../services/priorities.service';
import * as PrioritiesActions from './priorities.actions';

@Injectable()
export class PrioritiesEffects {
  loadPriorities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PrioritiesActions.loadPriorities),
      mergeMap(() =>
        this.service.getPriorities().pipe(
          map(prorities =>
            PrioritiesActions.loadPrioritiesSuccess({ prorities: prorities })
          ),
          catchError(() => PrioritiesActions.loadPrioritiesFailure)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: PrioritiesService) {}
}

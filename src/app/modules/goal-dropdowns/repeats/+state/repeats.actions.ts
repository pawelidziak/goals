import { createAction, props } from '@ngrx/store';

import { Repeat } from './Repeats.models';


export const loadRepeats = createAction('[Repeat] Load Repeats');

export const loadRepeatsSuccess = createAction(
  '[Repeat] Load Repeats Success',
  props<{ repeats: Repeat[] }>()
);

export const loadRepeatsFailure = createAction(
  '[Repeat] Load Repeats Failure',
  props<{ error: any }>()
);

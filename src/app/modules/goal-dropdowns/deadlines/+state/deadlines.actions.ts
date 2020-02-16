import { createAction, props } from '@ngrx/store';

import { Deadline } from './deadlines.models';


export const loadDeadlines = createAction('[Deadline] Load Deadlines');

export const loadDeadlinesSuccess = createAction(
  '[Deadline] Load Deadlines Success',
  props<{ deadlines: Deadline[] }>()
);

export const loadDeadlinesFailure = createAction(
  '[Deadline] Load Deadlines Failure',
  props<{ error: any }>()
);

export const selectDeadline = createAction(
  '[Deadline] Select Deadline',
  props<{ id: string }>()
);

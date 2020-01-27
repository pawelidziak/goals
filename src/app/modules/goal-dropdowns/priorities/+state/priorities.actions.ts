import { createAction, props } from '@ngrx/store';

import { Priority } from './priorities.models';


export const loadPriorities = createAction('[Priority] Load Priorities');

export const loadPrioritiesSuccess = createAction(
  '[Priority] Load Priorities Success',
  props<{ prorities: Priority[] }>()
);

export const loadPrioritiesFailure = createAction(
  '[Priority] Load Priorities Failure',
  props<{ error: any }>()
);

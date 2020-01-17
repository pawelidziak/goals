import { createAction, props } from '@ngrx/store';
import { Goal } from './goals.models';

export const loadGoals = createAction('[Goals] Load Goals');

export const loadGoalsSuccess = createAction(
  '[Goals] Load Goals Success',
  props<{ goals: Goal[] }>()
);

export const loadGoalsFailure = createAction(
  '[Goals] Load Goals Failure',
  props<{ error: any }>()
);

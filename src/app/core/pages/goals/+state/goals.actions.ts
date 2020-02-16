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

export const addGoal = createAction(
  '[Goals] Add Goal',
  props<{ goal: Goal }>()
);

export const addGoalSuccess = createAction(
  '[Goals] Add Goal Success',
  props<{ goal: Goal }>()
);

export const addGoalFailure = createAction(
  '[Goals] Add Goal Failure',
  props<{ error: any }>()
);

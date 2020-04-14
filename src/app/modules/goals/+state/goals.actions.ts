import { createAction, props } from '@ngrx/store';
import { Goal } from './goals.models';

/**
 * LOAD
 */
export const loadGoals = createAction('[Goals] Load Goals');

export const loadGoalsSuccess = createAction(
  '[Goals] Load Goals Success',
  props<{ goals: Goal[] }>()
);

export const loadGoalsFailure = createAction(
  '[Goals] Load Goals Failure',
  props<{ error: any }>()
);

/**
 * ADD
 */
export const addGoal = createAction(
  '[Goals] Add Goal',
  props<{ name: string }>()
);

export const addGoalSuccess = createAction(
  '[Goals] Add Goal Success',
  props<{ id: string }>()
);

export const addGoalFailure = createAction(
  '[Goals] Add Goal Failure',
  props<{ error: any }>()
);

/**
 * EDIT
 */
export const editGoal = createAction(
  '[Goals] Edit Goal',
  props<{ goal: Goal }>()
);

export const editGoalSuccess = createAction(
  '[Goals] Edit Goal Success',
  props<{ id: string }>()
);

export const editGoalFailure = createAction(
  '[Goals] Edit Goal Failure',
  props<{ error: any }>()
);

/**
 * DELETE
 */
export const deleteGoal = createAction(
  '[Goals] Delete Goal',
  props<{ name: string }>()
);

export const deleteGoalSuccess = createAction(
  '[Goals] Delete Goal Success',
  props<{ id: string }>()
);

export const deleteGoalFailure = createAction(
  '[Goals] Delete Goal Failure',
  props<{ error: any }>()
);

/**
 * SELECT
 */
export const selectGoal = createAction(
  '[Goals] Select Goals',
  props<{ id: string }>()
);

/**
 * FILTER
 */
export const filterGoals = createAction(
  '[Goals] Filter Goals',
  props<{ filter: any }>()
);

/**
 * DONE / UNDONE
 */
export const doneGoal = createAction(
  '[Goals] Done Goal',
  props<{ id: string }>()
);

export const undoneGoal = createAction(
  '[Goals] Undone Goal',
  props<{ id: string }>()
);

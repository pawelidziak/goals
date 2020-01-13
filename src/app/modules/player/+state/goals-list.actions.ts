import { Goal } from './goals-list.models';
import { createAction, props } from '@ngrx/store';

export const loadGoalList = createAction('[GoalsList] Load GoalsList');

export const loadGoalListSuccess = createAction(
  '[GoalsList] Load GoalsList Success',
  props<{ goalsList: Goal[] }>()
);

export const loadGoalListFailure = createAction(
  '[GoalsList] Load GoalsList Failure',
  props<{ error: any }>()
);

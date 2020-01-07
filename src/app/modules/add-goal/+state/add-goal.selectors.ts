import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ADDGOAL_FEATURE_KEY } from './add-goal.reducer';
import { AddGoal } from './add-goal.models';

export const getAddGoalState = createFeatureSelector<AddGoal>(
  ADDGOAL_FEATURE_KEY
);

export const getShow = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.show
);

export const getTfFocused = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.tfFocused
);

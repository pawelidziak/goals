import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ADDGOAL_FEATURE_KEY } from './add-goal-modal.reducer';
import { AddGoal } from './add-goal-modal.models';

export const getAddGoalState = createFeatureSelector<AddGoal>(
  ADDGOAL_FEATURE_KEY
);

export const getShow = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.show
);

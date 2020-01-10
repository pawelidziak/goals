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

export const getDeadlines = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.deadlines
);

const getSelectedDeadlineId = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.selectedDeadlineId
);

export const getActiveDeadline = createSelector(
  getAddGoalState,
  getSelectedDeadlineId,
  (state: AddGoal, id: string | number) =>
    state.deadlines.find(it => it.id === id)
);

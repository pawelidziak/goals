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

export const getTfFocused = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.tfFocused
);

export const getGoal = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.goal
);

export const getDeadlines = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.deadlines
);

export const getPriorities = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.priorities
);

export const getRepeats = createSelector(
  getAddGoalState,
  (state: AddGoal) => state.repeats
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

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GOALS_FEATURE_KEY } from './goals.reducer';
import { Goals } from './goals.models';

export const getAddGoalState = createFeatureSelector<Goals>(
  GOALS_FEATURE_KEY
);

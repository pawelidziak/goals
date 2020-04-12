import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GOALS_FEATURE_KEY, GoalsState, goalsAdapter } from './goals.reducer';
import { Goal } from './goals.models';

export const getGoalsState = createFeatureSelector<GoalsState>(
  GOALS_FEATURE_KEY
);

const { selectAll, selectEntities } = goalsAdapter.getSelectors();

export const getGoalsLoaded = createSelector(
  getGoalsState,
  (state: GoalsState) => state.loaded
);

export const getGoalsError = createSelector(
  getGoalsState,
  (state: GoalsState) => state.error
);

export const getAllGoals = createSelector(
  getGoalsState,
  (state: GoalsState) => selectAll(state)
);

export const getGoalsEntities = createSelector(
  getGoalsState,
  (state: GoalsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGoalsState,
  (state: GoalsState) => state.selectedId
);

export const getSelected = createSelector(
  getGoalsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getActiveFilter = createSelector(
  getGoalsState,
  (state: GoalsState) => state.activeFilter
);

export const getFilteredGoals = createSelector(
  getAllGoals,
  getActiveFilter,
  (goals: Goal[], filter: any) => filter 
    ? goals.filter((goal) => goal.deadline.name === filter.name)
    : goals
);

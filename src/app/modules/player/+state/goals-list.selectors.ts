import { GOALSLIST_FEATURE_KEY, GoalsListState, goalsListAdapter } from './goals-list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const getGoalsListState = createFeatureSelector<GoalsListState>(
    GOALSLIST_FEATURE_KEY
  );


const { selectAll, selectEntities } = goalsListAdapter.getSelectors();

export const getGoalsListLoaded = createSelector(
  getGoalsListState,
  (state: GoalsListState) => state.loaded
);

export const getGoalsListError = createSelector(
  getGoalsListState,
  (state: GoalsListState) => state.error
);

export const getAllGoalsList = createSelector(
  getGoalsListState,
  (state: GoalsListState) => selectAll(state)
);

export const getGoalsListEntities = createSelector(
  getGoalsListState,
  (state: GoalsListState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGoalsListState,
  (state: GoalsListState) => state.selectedId
);

export const getSelected = createSelector(
  getGoalsListEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
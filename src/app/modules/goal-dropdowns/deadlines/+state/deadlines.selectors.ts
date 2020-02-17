import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  DEADLINES_FEATURE_KEY,
  DeadlinesState,
  deadlinesAdapter
} from './deadlines.reducer';
import { Deadline } from './deadlines.models';

export const getDeadlinesState = createFeatureSelector<DeadlinesState>(
  DEADLINES_FEATURE_KEY
);

const { selectAll, selectEntities } = deadlinesAdapter.getSelectors();

export const getDeadlinesLoaded = createSelector(
  getDeadlinesState,
  (state: DeadlinesState) => state.loaded
);

export const getDeadlinesError = createSelector(
  getDeadlinesState,
  (state: DeadlinesState) => state.error
);

export const getAllDeadlines = createSelector(
  getDeadlinesState,
  (state: DeadlinesState) => selectAll(state)
);

export const getDeadlinesEntities = createSelector(
  getDeadlinesState,
  (state: DeadlinesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDeadlinesState,
  (state: DeadlinesState) => state.selectedId
);

export const getSelected = createSelector(
  getDeadlinesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getDeadlineIndex = (deadline: Deadline) => createSelector(
  getAllDeadlines,
  (deadlines: Deadline[]) =>
    deadlines.findIndex(item => item.id === deadline.id)
);

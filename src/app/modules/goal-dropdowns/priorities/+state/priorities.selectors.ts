import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PRIORITIES_FEATURE_KEY,
  PrioritiesState,
  prioritiesAdapter
} from './priorities.reducer';
import { Priority } from './priorities.models';

export const getPrioritiesState = createFeatureSelector<PrioritiesState>(
  PRIORITIES_FEATURE_KEY
);

const { selectAll, selectEntities } = prioritiesAdapter.getSelectors();

export const getPrioritiesLoaded = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => state.loaded
);

export const getPrioritiesError = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => state.error
);

export const getAllPriorities = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => selectAll(state)
);

export const getPrioritiesEntities = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPrioritiesState,
  (state: PrioritiesState) => state.selectedId
);

export const getSelected = createSelector(
  getPrioritiesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getPriorityIndex = (priority: Priority) => createSelector(
  getAllPriorities,
  (priorities: Priority[]) =>
    priorities.findIndex(item => item.id === priority.id)
);

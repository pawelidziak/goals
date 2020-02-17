import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  REPEATS_FEATURE_KEY,
  RepeatsState,
  repeatsAdapter
} from './repeats.reducer';
import { Repeat } from './repeats.models';

export const getRepeatsState = createFeatureSelector<RepeatsState>(
  REPEATS_FEATURE_KEY
);

const { selectAll, selectEntities } = repeatsAdapter.getSelectors();

export const getRepeatsLoaded = createSelector(
  getRepeatsState,
  (state: RepeatsState) => state.loaded
);

export const getRepeatsError = createSelector(
  getRepeatsState,
  (state: RepeatsState) => state.error
);

export const getAllRepeats = createSelector(
  getRepeatsState,
  (state: RepeatsState) => selectAll(state)
);

export const getRepeatsEntities = createSelector(
  getRepeatsState,
  (state: RepeatsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getRepeatsState,
  (state: RepeatsState) => state.selectedId
);

export const getSelected = createSelector(
  getRepeatsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

export const getRepeatIndex = (repeat: Repeat) => createSelector(
  getAllRepeats,
  (repeats: Repeat[]) =>
    repeats.findIndex(item => item.id === repeat.id)
);

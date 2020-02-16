import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as RepeatsActions from './repeats.actions';
import { Repeat } from './repeats.models';

export const REPEATS_FEATURE_KEY = 'repeats';

export interface RepeatsState extends EntityState<Repeat> {
  selectedId?: string;
  loaded: boolean;
  error?: string | null;
}
export const repeatsAdapter: EntityAdapter<Repeat> = createEntityAdapter<
  Repeat
>();

export const initialState: RepeatsState = repeatsAdapter.getInitialState({
  selectedId: null,
  loaded: false
});

const repeatsReducer = createReducer(
  initialState,
  on(RepeatsActions.loadRepeats, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(RepeatsActions.loadRepeatsSuccess, (state, { repeats }) =>
    repeatsAdapter.addAll(repeats, { ...state, loaded: true })
  ),
  on(RepeatsActions.loadRepeatsFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true
  })),
  on(RepeatsActions.selectRepeat, (state, { id }) => ({
    ...state,
    selectedId: id
  }))
);

export function reducer(state: RepeatsState | undefined, action: Action) {
  return repeatsReducer(state, action);
}

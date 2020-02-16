import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as DeadlinesActions from './deadlines.actions';
import { Deadline } from './deadlines.models';

export const DEADLINES_FEATURE_KEY = 'deadlines';

export interface DeadlinesState extends EntityState<Deadline> {
  selectedId?: string;
  loaded: boolean;
  error?: string | null;
}
export const deadlinesAdapter: EntityAdapter<Deadline> = createEntityAdapter<
  Deadline
>();

export const initialState: DeadlinesState = deadlinesAdapter.getInitialState({
  selectedId: null,
  loaded: false
});

const reteapsReducer = createReducer(
  initialState,
  on(DeadlinesActions.loadDeadlines, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(DeadlinesActions.loadDeadlinesSuccess, (state, { deadlines }) =>
    deadlinesAdapter.addAll(deadlines, { ...state, loaded: true })
  ),
  on(DeadlinesActions.loadDeadlinesFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true
  })),
  on(DeadlinesActions.selectDeadline, (state, { id }) => ({
    ...state,
    selectedId: id
  }))
);

export function reducer(state: DeadlinesState | undefined, action: Action) {
  return reteapsReducer(state, action);
}

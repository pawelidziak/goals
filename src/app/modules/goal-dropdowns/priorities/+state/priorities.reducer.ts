import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as PrioritiesActions from './priorities.actions';
import { Priority } from './priorities.models';

export const PRIORIES_FEATURE_KEY = 'priorities';

export interface PrioritiesState extends EntityState<Priority> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}
export const prioritiesAdapter: EntityAdapter<Priority> = createEntityAdapter<
  Priority
>();

export const initialState: PrioritiesState = prioritiesAdapter.getInitialState({
  selectedId: null,
  loaded: false
});

const goalsReducer = createReducer(
  initialState,
  on(PrioritiesActions.loadPriorities, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(PrioritiesActions.loadPrioritiesSuccess, (state, { prorities }) =>
    prioritiesAdapter.addAll(prorities, { ...state, loaded: true })
  ),
  on(PrioritiesActions.loadPrioritiesFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true
  }))
);

export function reducer(state: PrioritiesState | undefined, action: Action) {
  return goalsReducer(state, action);
}

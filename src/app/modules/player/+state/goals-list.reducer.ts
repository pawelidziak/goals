import { Goal } from './goals-list.models';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as GoalsListActions from './goals-list.actions';

export const GOALSLIST_FEATURE_KEY = 'goalsList';

export interface GoalsListState extends EntityState<Goal> {
  selectedId?: string | number; // which GoalsList record has been selected
  loaded: boolean; // has the GoalList been loaded
  error?: string | null; // last none error (if any)
}
export const goalsListAdapter: EntityAdapter<Goal> = createEntityAdapter<
  Goal
>();

export const initialState: GoalsListState = goalsListAdapter.getInitialState({
  selectedId: null,
  loaded: false
});

const goalListReducer = createReducer(
  initialState,
  on(GoalsListActions.loadGoalList, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(GoalsListActions.loadGoalListSuccess, (state, { goalsList }) =>
    goalsListAdapter.addAll(goalsList, { ...state, loaded: true })
  ),
  on(GoalsListActions.loadGoalListFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: GoalsListState | undefined, action: Action) {
  return goalListReducer(state, action);
}

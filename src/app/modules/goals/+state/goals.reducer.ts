import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import * as GoalActions from './goals.actions';
import { Goal } from './goals.models';

export const GOALS_FEATURE_KEY = 'goals';

export interface GoalsState extends EntityState<Goal> {
  // goals: Array<Goal>;
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  activeFilter: any;
}
export const goalsAdapter: EntityAdapter<Goal> = createEntityAdapter<Goal>();

export const initialState: GoalsState = goalsAdapter.getInitialState({
  selectedId: null,
  loaded: false,
  activeFilter: null
});

const goalsReducer = createReducer(
  initialState,
  on(GoalActions.loadGoals, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(GoalActions.loadGoalsSuccess, (state, { goals }) =>
    goalsAdapter.addAll(goals, { ...state, loaded: true })
  ),
  on(GoalActions.loadGoalsFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true
  })),
  on(GoalActions.selectGoal, (state, { id }) => ({
    ...state,
    selectedId: id
  })),
  on(GoalActions.filterGoals, (state, { filter }) => ({
    ...state,
    activeFilter: filter
  }))
);

export function reducer(state: GoalsState | undefined, action: Action) {
  return goalsReducer(state, action);
}

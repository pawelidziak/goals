import { Goals } from './goals.models';
import { createReducer, on, Action } from '@ngrx/store';
import * as AddGoalActions from './goals.actions';

export const GOALS_FEATURE_KEY = 'goals';

export interface GoalsState {
  readonly goals: Goals;
}

export const initialState: Goals = {
  show: false,
  tfFocused: false,
};

const goalsReducer = createReducer(
  initialState,
);

export function reducer(state: Goals | undefined, action: Action) {
  return goalsReducer(state, action);
}

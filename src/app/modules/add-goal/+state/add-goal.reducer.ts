import { AddGoal } from './add-goal.models';
import { createReducer, on, Action } from '@ngrx/store';
import * as AddGoalActions from './add-goal.actions';

export const ADDGOAL_FEATURE_KEY = 'addGoal';

export interface AddGoalState {
  readonly addGoal: AddGoal;
}

export const initialState: AddGoal = {
  show: false,
  tfFocused: false,
};

const addGoalReducer = createReducer(
  initialState,
  on(AddGoalActions.showAddGoal, state => ({
    ...state,
    show: true,
    tfFocused: true
  })),
  on(AddGoalActions.hideAddGoal, state => ({
    ...state,
    show: false,
    tfFocused: false
  })),
  on(AddGoalActions.focusTextField, state => ({
    ...state,
    tfFocused: true
  })),
  on(AddGoalActions.lostFocusTextField, state => ({
    ...state,
    tfFocused: false
  }))
);

export function reducer(state: AddGoal | undefined, action: Action) {
  return addGoalReducer(state, action);
}

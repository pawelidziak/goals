import { AddGoal } from './add-goal-modal.models';
import { createReducer, on, Action } from '@ngrx/store';
import * as AddGoalActions from './add-goal-modal.actions';

export const ADDGOAL_FEATURE_KEY = 'addGoal';

export interface AddGoalState {
  readonly addGoal: AddGoal;
}

export const initialState: AddGoal = {
  show: false,
};

const addGoalReducer = createReducer(
  initialState,
  on(AddGoalActions.showAddGoalModal, (state) => ({
    ...state,
    show: true,
  })),
  on(AddGoalActions.hideAddGoalModal, (state) => ({
    ...state,
    show: false,
  }))
);

export function reducer(state: AddGoal | undefined, action: Action) {
  return addGoalReducer(state, action);
}

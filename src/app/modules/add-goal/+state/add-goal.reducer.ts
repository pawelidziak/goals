import { AddGoal, Deadline, Priority } from './add-goal.models';
import { createReducer, on, Action } from '@ngrx/store';
import * as AddGoalActions from './add-goal.actions';

export const ADDGOAL_FEATURE_KEY = 'addGoal';

export interface AddGoalState {
  readonly addGoal: AddGoal;
}

export const initialPriorities: Priority[] = [
  { id: '1', name: 'A - High' },
  { id: '2', name: 'B - Medium' },
  { id: '3', name: 'C - Low' },
  { id: '4', name: 'D - None' }
];

export const initialDeadlines: Deadline[] = [
  { id: '1', name: 'Today' },
  { id: '2', name: 'Tomorrow' },
  { id: '3', name: 'Long-term' },
  { id: '4', name: 'Todo' }
];

export const initialState: AddGoal = {
  show: false,
  tfFocused: false,
  selectedDeadlineId: '1',
  priorities: initialPriorities,
  deadlines: initialDeadlines,
  goal: {
    id: '',
    name: '',
    desc: '',
    deadline: initialDeadlines[0],
    priority: initialPriorities[0]
  }
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
  })),
  on(AddGoalActions.selectPriority, (state, { priority }) => ({
    ...state,
    goal: { ...state.goal, priority: priority }
  })),
  on(AddGoalActions.selectDeadline, (state, { deadline }) => ({
    ...state,
    goal: { ...state.goal, deadline: deadline }
  }))
);

export function reducer(state: AddGoal | undefined, action: Action) {
  return addGoalReducer(state, action);
}

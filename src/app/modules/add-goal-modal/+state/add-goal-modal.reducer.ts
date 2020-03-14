import { AddGoal, Deadline, Priority, Repeat } from './add-goal-modal.models';
import { createReducer, on, Action } from '@ngrx/store';
import * as AddGoalActions from './add-goal-modal.actions';

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

export const initialRepeats: Repeat[] = [
  { id: '1', name: 'None' },
  { id: '2', name: 'Daily' },
  { id: '3', name: 'Weekly' },
  { id: '4', name: 'Other' }
];

export const initialState: AddGoal = {
  show: false,
  tfFocused: false,
  selectedDeadlineId: '1',
  priorities: initialPriorities,
  deadlines: initialDeadlines,
  repeats: initialRepeats,
  goal: {
    id: '',
    name: '',
    desc: '',
    deadline: initialDeadlines[0],
    priority: initialPriorities[0],
    repeat: initialRepeats[0]
  }
};

const addGoalReducer = createReducer(
  initialState,
  on(AddGoalActions.showAddGoalModal, state => ({
    ...state,
    show: true,
    tfFocused: true
  })),
  on(AddGoalActions.hideAddGoalModal, state => ({
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
  })),
  on(AddGoalActions.selectRepeat, (state, { repeat }) => ({
    ...state,
    goal: { ...state.goal, repeat: repeat }
  }))
);

export function reducer(state: AddGoal | undefined, action: Action) {
  return addGoalReducer(state, action);
}

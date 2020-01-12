import { createAction, props } from '@ngrx/store';
import { Priority, Deadline, Repeat } from './add-goal.models';

export const showAddGoal = createAction('[AddGoal] SHOW_ADD_GOAL');
export const hideAddGoal = createAction('[AddGoal] HIDE_ADD_GOAL');
export const focusTextField = createAction('[AddGoal] FOCUS_TEXT_FIELD');
export const lostFocusTextField = createAction(
  '[AddGoal] LOST_FOCUS_TEXT_FIELD'
);
export const selectDeadline = createAction(
  '[AddGoal] SELECT_DEADLINE',
  props<{ deadline: Deadline }>()
);

export const selectPriority = createAction(
  '[AddGoal] SELECT_PRIORITY',
  props<{ priority: Priority }>()
);

export const selectRepeat = createAction(
  '[AddGoal] SELECT_REPEAT',
  props<{ repeat: Repeat }>()
);

export const getPriorities = createAction('[AddGoal] GET_PRIORITIES');
export const getDeadlines = createAction('[AddGoal] GET_DEADLINES');
export const getRepeats = createAction('[AddGoal] GET_REPEATS');

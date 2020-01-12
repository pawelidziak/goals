import { createAction, props } from '@ngrx/store';
import { Priority, Deadline } from './add-goal.models';

export const showAddGoal = createAction('[AddGoal] SHOW_ADD_GOAL');
export const hideAddGoal = createAction('[AddGoal] HIDE_ADD_GOAL');
export const focusTextField = createAction('[AddGoal] FOCUS_TEXT_fIELD');
export const lostFocusTextField = createAction(
  '[AddGoal] LOST_FOCUS_TEXT_fIELD'
);
export const selectDeadline = createAction(
  '[AddGoal] SELECT_DEADLINE',
  props<{ deadline: Deadline }>()
);

export const selectPriority = createAction(
  '[AddGoal] SELECT_PRIORITY',
  props<{ priority: Priority }>()
);

export const getPriorities = createAction('[AddGoal] GET_PRORITIES');
export const getDeadlines = createAction('[AddGoal] GET_DEADLINES');

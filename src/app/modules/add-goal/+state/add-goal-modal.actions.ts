import { createAction, props } from '@ngrx/store';
import { Priority, Deadline, Repeat } from './add-goal-modal.models';

export const showAddGoalModal = createAction('[AddGoalModal] SHOW_ADD_GOAL');
export const hideAddGoalModal = createAction('[AddGoalModal] HIDE_ADD_GOAL');
export const focusTextField = createAction('[AddGoalModal] FOCUS_TEXT_FIELD');
export const lostFocusTextField = createAction(
  '[AddGoalModal] LOST_FOCUS_TEXT_FIELD'
);
export const selectDeadline = createAction(
  '[AddGoalModal] SELECT_DEADLINE',
  props<{ deadline: Deadline }>()
);

export const selectPriority = createAction(
  '[AddGoalModal] SELECT_PRIORITY',
  props<{ priority: Priority }>()
);

export const selectRepeat = createAction(
  '[AddGoalModal] SELECT_REPEAT',
  props<{ repeat: Repeat }>()
);

export const getPriorities = createAction('[AddGoalModal] GET_PRIORITIES');
export const getDeadlines = createAction('[AddGoalModal] GET_DEADLINES');
export const getRepeats = createAction('[AddGoalModal] GET_REPEATS');

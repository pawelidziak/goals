import { createAction } from '@ngrx/store';

export const showAddGoal = createAction('[AddGoal] SHOW_ADD_GOAL');
export const hideAddGoal = createAction('[AddGoal] HIDE_ADD_GOAL');
export const focusTextField = createAction('[AddGoal] FOCUS_TEXT_fIELD');
export const lostFocusTextField = createAction('[AddGoal] LOST_FOCUS_TEXT_fIELD');

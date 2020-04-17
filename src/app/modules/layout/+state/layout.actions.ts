import { createAction, props } from '@ngrx/store';

export const showBottomNav = createAction('[Layout] Show Bottom Nav');
export const hideBottomNav = createAction('[Layout] Hide Bottom Nav');
export const showAddGoalModal = createAction('[Layout] Show Add Goal Modal');
export const hideAddGoalModal = createAction('[Layout] Hide Add Goal Modal');

export const showComponent = createAction(
  '[Layout] Show Component',
  props<{ name: string }>()
);

export const addToShown = createAction(
  '[Layout] Add To Shown',
  props<{ name: string }>()
);

export const alreadyShown = createAction('[Layout] Already Shown');

export const showComponentFailure = createAction(
  '[Layout] Show Component Failure',
  props<{ err: any }>()
);


export const hideComponent = createAction(
  '[Layout] Hide Component',
  props<{ name: string }>()
);

export const removeFromShown = createAction(
  '[Layout] Remove From Shown',
  props<{ name: string }>()
);

export const componentNotShown = createAction('[Layout] Component Not Shown');

export const hideComponentFailure = createAction(
  '[Layout] Hide Component Failure',
  props<{ err: any }>()
);


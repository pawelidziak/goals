import { createReducer, on, Action } from '@ngrx/store';
import { BottomNavigation } from './bottom-navigation.models';
import * as BottomNavigationActions from './bottom-navigation.actions';

export const BOTTOMNAVIGATION_FEATURE_KEY = 'bottomNavigation';

export interface BottomNavigationState {
  readonly ngrxForms: BottomNavigation;
}

export const initialState: BottomNavigation = {
  show: true
};

const ngrxFormsReducer = createReducer(
  initialState,
  on(BottomNavigationActions.showBottomNav, (state) => ({
    ...state,
    show: true
  })),
  on(BottomNavigationActions.hideBottomNav, (state) => ({
    ...state,
    show: false
  }))
);

export function reducer(state: BottomNavigation | undefined, action: Action) {
  return ngrxFormsReducer(state, action);
}

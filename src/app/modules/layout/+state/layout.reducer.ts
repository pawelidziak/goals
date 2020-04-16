import { Layout } from './layout.models';
import { createReducer, on, Action } from '@ngrx/store';
import * as LayoutActions from './layout.actions';

export const LAYOUT_FEATURE_KEY = 'layout';

export interface LayoutState {
  readonly Layout: Layout;
}

export const initialState: Layout = {
  shownComponents: ['BOTTOM_NAV'],
};

const LayoutReducer = createReducer(
  initialState,
  on(LayoutActions.addToShown, (state, { name }) => ({
    ...state,
    shownComponents: [...state.shownComponents, name]
  })),
  on(LayoutActions.removeFromShown, (state, { name }) => ({
    ...state,
    shownComponents: state.shownComponents.filter(compName => compName !== name)
  })),
);


export function reducer(state: Layout | undefined, action: Action) {
  return LayoutReducer(state, action);
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LAYOUT_FEATURE_KEY } from './layout.reducer';
import { Layout } from './layout.models';

export const getLayoutState = createFeatureSelector<Layout>(LAYOUT_FEATURE_KEY);

export const getShownComponents = createSelector(
  getLayoutState,
  (state: Layout) => state.shownComponents
);

export const isComponentShown = createSelector(
  getShownComponents,
  (shown: string[], props) =>
    shown.findIndex((compName) => compName === props.name) !== -1
);

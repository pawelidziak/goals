import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BOTTOMNAVIGATION_FEATURE_KEY } from './bottom-navigation.reducer';
import { BottomNavigation } from './bottom-navigation.models';

export const getBottomNavigationState = createFeatureSelector<BottomNavigation>(
  BOTTOMNAVIGATION_FEATURE_KEY
);

export const getShow = createSelector(
  getBottomNavigationState,
  (state: BottomNavigation) => state.show
);

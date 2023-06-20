import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.state';

const selectFeature = createFeatureSelector<CoreState>('core');

export const selectPost = createSelector(
  selectFeature,
  (state: CoreState) => state?.post
);

export const selectPostDetails = createSelector(
  selectFeature,
  (state: CoreState) => state?.postDetails
);

export const selectUserDetails = createSelector(
  selectFeature,
  (state: CoreState) => state?.userDetails
);

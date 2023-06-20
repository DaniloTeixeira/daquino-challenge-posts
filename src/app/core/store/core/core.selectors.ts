import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoreState } from './core.state';

const selectFeature = createFeatureSelector<CoreState>('core');

export const selectPost = createSelector(
  selectFeature,
  (state: CoreState) => state?.post
);

export const selectSelectedPost = createSelector(
  selectFeature,
  (state: CoreState) => state?.selectedPost
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostState } from './post.state';

const selectFeature = createFeatureSelector<PostState>('post');

export const selectPost = createSelector(
  selectFeature,
  (state: PostState) => state?.post
);

export const selectPostDetails = createSelector(
  selectFeature,
  (state: PostState) => state?.postDetails
);

export const selectUserDetails = createSelector(
  selectFeature,
  (state: PostState) => state?.userDetails
);

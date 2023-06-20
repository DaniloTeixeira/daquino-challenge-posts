import { createAction, props } from '@ngrx/store';
import { Post, PostDetails } from '../../models/post/Post';

export enum PostActions {
  LoadPostListRequest = '[CORE] Load Post List Request',
  LoadPostListSuccess = '[CORE] Load post List Success',
  LoadPostListError = '[CORE] Load Post List Error',

  NavigateToPostDetails = '[CORE] Navigate To Post Details',
  NavigateToUserDetails = '[CORE] Navigate To User Details',
  NavigateToPostList = '[CORE] Navigate To Post List',

  ClearCoreState = '[CORE] Clear Core State',
}

export const loadPostListRequest = createAction(
  PostActions.LoadPostListRequest
);

export const loadPostListSuccess = createAction(
  PostActions.LoadPostListSuccess,
  props<{ payload: Post }>()
);

export const loadPostListError = createAction(
  PostActions.LoadPostListError,
  props<{ payload: string }>()
);

export const navigateToPostDetails = createAction(
  PostActions.NavigateToPostDetails,
  props<{ payload: PostDetails }>()
);

export const navigateToUserDetails = createAction(
  PostActions.NavigateToUserDetails,
  props<{ payload: string }>()
);

export const navigateToPostList = createAction(PostActions.NavigateToPostList);

export const clearCoreState = createAction(PostActions.ClearCoreState);

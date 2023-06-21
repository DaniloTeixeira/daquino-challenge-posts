import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/features/post/interfaces/Post';
import { PostDetails } from 'src/app/features/post/interfaces/PostDetails';

export enum PostActions {
  LoadPostListRequest = '[POST] Load Post List Request',
  LoadPostListSuccess = '[POST] Load post List Success',
  LoadPostListError = '[POST] Load Post List Error',

  NavigateToPostDetails = '[POST] Navigate To Post Details',
  NavigateToUserDetails = '[POST] Navigate To User Details',
  NavigateToPostList = '[POST] Navigate To Post List',

  ClearPostState = '[POST] Clear Post State',
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

export const clearPostState = createAction(PostActions.ClearPostState);

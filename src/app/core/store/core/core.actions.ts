import { createAction, props } from '@ngrx/store';
import { Post, PostDetails } from '../../models/post/Post';

export enum PostActions {
  LoadPostListRequest = '[CORE] Load Post List Request',
  LoadPostListSuccess = '[CORE] Load post List Success',
  LoadPostListError = '[CORE] Load Post List Error',

  NavigateToPostDetails = '[CORE] Navigate To Post Details',
  NavigateToUserDetails = '[CORE] Navigate To User Details',

  SetSelectedPost = '[CORE] Set Selected Post',
}

export const loadPostListRequest = createAction(
  PostActions.LoadPostListRequest
);

export const loadPostListSuccess = createAction(
  PostActions.LoadPostListSuccess,
  props<{ payload: Post }>()
);

export const loadPostListError = createAction(PostActions.LoadPostListError);

export const navigateToPostDetails = createAction(
  PostActions.NavigateToPostDetails,
  props<{ payload: PostDetails }>()
);

export const setSelectedPost = createAction(
  PostActions.SetSelectedPost,
  props<{ payload: PostDetails }>()
);

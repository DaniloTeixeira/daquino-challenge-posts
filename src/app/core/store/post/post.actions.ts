import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post/Post';

export enum PostActions {
  LoadPostListRequest = '[POST] Load Post List Request',
  LoadPostListSuccess = '[POST] Load post List Success',
  LoadPostListError = '[POST] Load post List Error',
}

export const loadPostListRequest = createAction(
  PostActions.LoadPostListRequest
);

export const loadPostListSuccess = createAction(
  PostActions.LoadPostListSuccess,
  props<{ payload: Post }>()
);

export const loadPostListError = createAction(PostActions.LoadPostListError);

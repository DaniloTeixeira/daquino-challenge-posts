import { createReducer, on } from '@ngrx/store';
import { PostState } from './post.state';
import * as PostActions from './post.actions';
import { Post } from 'src/app/features/post/interfaces/Post';
import { PostDetails } from 'src/app/features/post/interfaces/PostDetails';

export const initialState: PostState = {
  post: undefined,
  postDetails: undefined,
  userDetails: [],
};

const loadPostListSuccess = (
  state: PostState,
  action: { payload: Post }
): PostState => ({
  ...state,
  post: action.payload,
});

const setPostDetails = (
  state: PostState,
  action: { payload: PostDetails }
): PostState => ({
  ...state,
  postDetails: action.payload,
});

const setUserDetails = (
  state: PostState,
  action: { payload: string }
): PostState => ({
  ...state,
  userDetails: state.post?.data.filter(
    ({ author }) => author.username === action.payload
  ),
});

const clearPostState = (): PostState => ({
  post: undefined,
  postDetails: undefined,
  userDetails: [],
});

export const postReducers = createReducer(
  initialState,
  on(PostActions.loadPostListSuccess, loadPostListSuccess),
  on(PostActions.navigateToPostDetails, setPostDetails),
  on(PostActions.navigateToUserDetails, setUserDetails),
  on(PostActions.clearPostState, clearPostState)
);

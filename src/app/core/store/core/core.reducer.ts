import { createReducer, on } from '@ngrx/store';
import { CoreState } from './core.state';
import { Post, PostDetails } from '../../models/post/Post';
import { loadPostListSuccess, setSelectedPost } from './core.actions';

export const initialState: CoreState = {
  post: undefined,
  selectedPost: undefined,
};

const _loadPostListSuccess = (
  state: CoreState,
  action: { payload: Post }
): CoreState => ({
  ...state,
  post: action.payload,
});

const _setSelectedPost = (
  state: CoreState,
  action: { payload: PostDetails }
): CoreState => ({
  ...state,
  selectedPost: action.payload,
});

export const reducers = createReducer(
  initialState,
  on(loadPostListSuccess, _loadPostListSuccess),
  on(setSelectedPost, _setSelectedPost)
);

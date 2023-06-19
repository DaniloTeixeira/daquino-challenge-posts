import { createReducer, on } from '@ngrx/store';
import { IPostState } from './post.state';
import { Post } from '../../models/post/Post';
import { loadPostListSuccess } from './post.actions';

export const initialState: IPostState = {
  post: undefined,
};

const _loadPostListSuccess = (
  state: IPostState,
  action: { payload: Post }
): IPostState => ({
  ...state,
  post: action.payload,
});

export const reducers = createReducer(
  initialState,
  on(loadPostListSuccess, _loadPostListSuccess)
);

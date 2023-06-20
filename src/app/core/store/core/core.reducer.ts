import { createReducer, on } from '@ngrx/store';
import { CoreState } from './core.state';
import { Post, PostDetails } from '../../models/post/Post';
import * as CoreActions from './core.actions';

export const initialState: CoreState = {
  post: undefined,
  postDetails: undefined,
  userDetails: [],
};

const loadPostListSuccess = (
  state: CoreState,
  action: { payload: Post }
): CoreState => ({
  ...state,
  post: action.payload,
});

const setPostDetails = (
  state: CoreState,
  action: { payload: PostDetails }
): CoreState => ({
  ...state,
  postDetails: action.payload,
});

const setUserDetails = (
  state: CoreState,
  action: { payload: string }
): CoreState => ({
  ...state,
  userDetails: state.post?.data.filter(
    ({ author }) => author.username === action.payload
  ),
});

const clearCoreState = (): CoreState => ({
  post: undefined,
  postDetails: undefined,
  userDetails: [],
});

export const reducers = createReducer(
  initialState,
  on(CoreActions.loadPostListSuccess, loadPostListSuccess),
  on(CoreActions.navigateToPostDetails, setPostDetails),
  on(CoreActions.navigateToUserDetails, setUserDetails),
  on(CoreActions.clearCoreState, clearCoreState)
);

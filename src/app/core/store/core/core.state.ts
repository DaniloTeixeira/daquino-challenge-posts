import { Post, PostDetails } from '../../models/post/Post';

export interface CoreState {
  post?: Post;
  selectedPost?: PostDetails;
}

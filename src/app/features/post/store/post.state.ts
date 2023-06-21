import { Post } from 'src/app/features/post/interfaces/Post';
import { PostDetails } from 'src/app/features/post/interfaces/PostDetails';

export interface PostState {
  post?: Post;
  postDetails?: PostDetails;
  userDetails?: PostDetails[];
}

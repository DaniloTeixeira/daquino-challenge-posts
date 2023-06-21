import { PostDetails } from './PostDetails';

export interface Post {
  success: boolean;
  total: number;
  data: PostDetails[];
}

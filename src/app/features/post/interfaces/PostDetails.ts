import { Author } from '../../user/interfaces/Author';
import { Comment } from '../../user/interfaces/Comment';

export interface PostDetails {
  id: string;
  title: string;
  image: string;
  body: string;
  author: Author;
  comments: Comment[];
}

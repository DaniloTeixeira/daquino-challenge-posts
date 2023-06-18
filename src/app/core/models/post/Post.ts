export interface Post {
  success: boolean;
  total: number;
  data: PostDetails[];
}

export interface PostDetails {
  id: string;
  title: string;
  image: string;
  body: string;
  author: Author;
  comments: Comment[];
}

interface Author {
  username: string;
  name: string;
  job: string;
}

interface Comment {
  id: string;
  author: Author;
  comment: string;
}

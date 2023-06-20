import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { POSTS_DATA } from '../../data/posts-data';
import { Post } from '../../models/post/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPostsFakeCall(): Observable<Post> {
    // throw new Error('');

    return of(POSTS_DATA).pipe(delay(2000));
  }
}

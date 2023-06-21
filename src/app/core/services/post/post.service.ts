import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { POSTS_DATA } from '../../data/posts-data';
import { Post } from '../../models/post/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPostsFakeCall(): Observable<Post> {
    // Simulando erro apenas para teste
    // throw new Error('Oops... Error loading post list.');

    return of(POSTS_DATA).pipe(delay(2000));
  }
}

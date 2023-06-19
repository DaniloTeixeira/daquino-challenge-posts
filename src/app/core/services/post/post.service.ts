import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { fakeData } from '../../data/fakeData';
import { Post } from '../../models/post/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPostsFakeCall(): Observable<Post> {
    // throw new Error('');

    return of(fakeData).pipe(delay(1500));
  }
}

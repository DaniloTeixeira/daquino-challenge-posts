import { Component, inject, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  clearPostState,
  loadPostListRequest,
  navigateToPostDetails,
} from 'src/app/features/post/store/post.actions';
import { PostDetails } from '../../interfaces/PostDetails';
import { selectPost } from '../../store/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  #store = inject(Store);

  post$ = this.#store.select(selectPost);

  ngOnInit(): void {
    this.#clearPostState();
    this.#setPost();
  }

  goToPostDetails(post: PostDetails): void {
    this.#store.dispatch(navigateToPostDetails({ payload: post }));
  }

  #clearPostState(): void {
    this.#store.dispatch(clearPostState());
  }

  #setPost(): void {
    this.#store.dispatch(loadPostListRequest());
  }
}

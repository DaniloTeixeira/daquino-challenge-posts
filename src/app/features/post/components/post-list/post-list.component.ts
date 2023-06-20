import { Component, inject, OnInit } from '@angular/core';

import { PostDetails } from 'src/app/core/models/post/Post';
import { Store } from '@ngrx/store';
import { selectPost } from 'src/app/core/store/core/core.selectors';
import {
  loadPostListRequest,
  navigateToPostDetails,
} from 'src/app/core/store/core/core.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  private store = inject(Store);

  post$ = this.store.select(selectPost);

  ngOnInit(): void {
    this.setPost();
  }

  goToPostDetails(post: PostDetails): void {
    this.store.dispatch(navigateToPostDetails({ payload: post }));
  }

  private setPost(): void {
    this.store.dispatch(loadPostListRequest());
  }
}

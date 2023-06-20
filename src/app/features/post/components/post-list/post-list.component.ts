import { Component, inject, OnInit } from '@angular/core';

import { PostDetails } from 'src/app/core/models/post/Post';
import { Store } from '@ngrx/store';
import { selectPost } from 'src/app/core/store/core/core.selectors';
import {
  clearCoreState,
  loadPostListRequest,
  navigateToPostDetails,
} from 'src/app/core/store/core/core.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  private store = inject(Store);
  private router = inject(Router);

  post$ = this.store.select(selectPost);

  ngOnInit(): void {
    this.clearCoreState();
    this.setPost();
  }

  goToPostDetails(post: PostDetails): void {
    this.store.dispatch(navigateToPostDetails({ payload: post }));
  }

  private clearCoreState(): void {
    this.store.dispatch(clearCoreState());
  }

  private setPost(): void {
    this.store.dispatch(loadPostListRequest());
  }
}

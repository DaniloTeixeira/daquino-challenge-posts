import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post, PostDetails } from 'src/app/core/models/post/Post';
import { Store } from '@ngrx/store';
import { loadPostListRequest } from 'src/app/core/store/post/post.actions';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store);

  post?: Post;

  ngOnInit(): void {
    this.getPosts();
  }

  goToPostDetails(post: PostDetails): void {
    this.router.navigate(['/post/details', post.id], {
      state: post,
    });
  }

  private getPosts(): void {
    this.store.dispatch(loadPostListRequest());
  }
}

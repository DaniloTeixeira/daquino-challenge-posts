import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Post, PostDetails } from 'src/app/core/models/post/Post';
import { PostService } from 'src/app/core/services';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private postService = inject(PostService);

  post?: Post;
  loading = false;

  ngOnInit(): void {
    this.getPosts();
  }

  goToPostDetails(post: PostDetails): void {
    this.router.navigate(['/post/details', post.id], {
      state: post,
    });
  }

  private getPosts(): void {
    this.loading = true;

    this.postService
      .getPostsFakeCall()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((post) => {
        this.post = post;
      })
      .add(() => {
        this.loading = false;
      });
  }
}

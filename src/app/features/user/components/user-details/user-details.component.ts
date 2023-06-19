import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Post, PostDetails } from 'src/app/core/models/post/Post';
import { PostService } from 'src/app/core/services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  @Input() userName?: string;

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private postService = inject(PostService);

  loading = false;
  post = history.state;
  userPosts?: PostDetails[];

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
        this.filterPostDataByUser(post);
      })
      .add(() => {
        this.loading = false;
      });
  }

  private filterPostDataByUser(post: Post): void {
    this.userPosts = post.data.filter(
      (user) => user.author.username === this.userName
    );
  }
}

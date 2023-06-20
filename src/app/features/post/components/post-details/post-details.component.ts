import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { PostDetails } from 'src/app/core/models/post/Post';
import { selectSelectedPost } from 'src/app/core/store/core/core.selectors';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  store = inject(Store);
  router = inject(Router);

  selectedPost$ = this.store.select(selectSelectedPost);

  ngOnInit(): void {}

  goToUserDetails(post: PostDetails): void {
    this.router.navigate(['/user/details', post.author.username], {
      state: post,
    });

    console.log(post);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostDetails } from 'src/app/core/models/post/Post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  router = inject(Router);

  post = history.state;

  ngOnInit(): void {}

  goToUserDetails(post: PostDetails): void {
    this.router.navigate(['/user/details', post.author.username], {
      state: post,
    });
  }
}

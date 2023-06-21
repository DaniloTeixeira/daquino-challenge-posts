import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostDetails } from 'src/app/core/models/post/Post';
import { navigateToUserDetails } from 'src/app/core/store/core/core.actions';
import { selectPostDetails } from 'src/app/core/store/core/core.selectors';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  private store = inject(Store);

  selectedPost$ = this.store.select(selectPostDetails);

  goToUserDetails(post: PostDetails): void {
    this.store.dispatch(
      navigateToUserDetails({ payload: post.author.username })
    );
  }
}

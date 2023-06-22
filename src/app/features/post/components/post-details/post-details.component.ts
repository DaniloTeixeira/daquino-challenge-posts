import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { navigateToUserDetails } from 'src/app/features/post/store/post.actions';
import { PostDetails } from '../../interfaces/PostDetails';
import { selectPostDetails } from '../../store/post.selectors';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent {
  #store = inject(Store);

  selectedPost$ = this.#store.select(selectPostDetails);

  goToUserDetails(post: PostDetails): void {
    this.#store.dispatch(
      navigateToUserDetails({ payload: post.author.username })
    );
  }
}

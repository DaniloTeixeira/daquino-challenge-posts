import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostDetails } from 'src/app/features/post/interfaces/PostDetails';
import {
  navigateToPostDetails,
  navigateToPostList,
} from 'src/app/features/post/store/post.actions';
import {
  selectPostDetails,
  selectUserDetails,
} from 'src/app/features/post/store/post.selectors';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  @Input() userName?: string;

  private store = inject(Store);

  userDetails$ = this.store.select(selectUserDetails);
  selectedPost$ = this.store.select(selectPostDetails);

  goToPostDetails(post: PostDetails): void {
    this.store.dispatch(navigateToPostDetails({ payload: post }));
  }

  goToPostList(): void {
    this.store.dispatch(navigateToPostList());
  }
}

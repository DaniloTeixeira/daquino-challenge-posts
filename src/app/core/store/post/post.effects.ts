import { inject, Injectable } from '@angular/core';
import { NotificationService } from 'src/app/features/shared/services/notification';
import { LoaderService } from '../../services/loader';
import { PostService } from '../../services/post';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import {
  loadPostListError,
  loadPostListRequest,
  loadPostListSuccess,
} from './post.actions';

@Injectable({
  providedIn: 'root',
})
export class PostEffects {
  private loader = inject(LoaderService);
  private postService = inject(PostService);
  private notification = inject(NotificationService);
  private actions$ = inject(Actions);

  loadPostListRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPostListRequest),
      tap(console.log),
      tap(() => this.loader.open('Loading posts...')),
      switchMap(() =>
        this.postService.getPostsFakeCall().pipe(
          map((post) => loadPostListSuccess({ payload: post })),
          catchError(() => of(loadPostListError()))
        )
      ),
      tap(() => this.loader.close())
    )
  );

  loadPostListError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadPostListError),
        map(() => this.notification.error('Error loading post list'))
      ),
    { dispatch: false }
  );
}

import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as PostActions from './post.actions';
import { Router } from '@angular/router';
import { PostService } from 'src/app/features/post/services/post';
import { LoaderService } from 'src/app/core/services/loader';
import { NotificationService } from 'src/app/core/services/notification';

@Injectable({
  providedIn: 'root',
})
export class PostEffects {
  private router = inject(Router);
  private actions$ = inject(Actions);
  private loader = inject(LoaderService);
  private postService = inject(PostService);
  private notification = inject(NotificationService);

  loadPostListRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPostListRequest),
      tap(() => this.loader.open('Loading posts...')),
      switchMap(() =>
        this.postService
          .getPostsFakeCall()
          .pipe(
            map((post) => PostActions.loadPostListSuccess({ payload: post }))
          )
      ),
      catchError((error) =>
        of(PostActions.loadPostListError({ payload: error }))
      ),
      tap(() => this.loader.close())
    )
  );

  loadPostListSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.loadPostListSuccess),
        map(() => this.notification.success('Posts loaded successfully!'))
      ),
    { dispatch: false }
  );

  loadPostListError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.loadPostListError),
        map(({ payload }) => this.notification.error(payload))
      ),
    { dispatch: false }
  );

  navigateToPostDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.navigateToPostDetails),
        tap(({ payload: { id } }) =>
          this.router.navigate(['/post/details', id])
        )
      ),
    { dispatch: false }
  );

  navigateToUserDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.navigateToUserDetails),
        tap(() => this.loader.open('Loagind user info...')),
        tap(({ payload }) => this.router.navigate(['/user/details', payload])),
        tap(() => this.loader.close())
      ),
    { dispatch: false }
  );

  navigateToPostList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(PostActions.navigateToPostList),
        tap(() => this.router.navigate(['/post/list']))
      ),
    { dispatch: false }
  );
}

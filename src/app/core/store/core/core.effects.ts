import { inject, Injectable } from '@angular/core';
import { NotificationService } from 'src/app/features/shared/services/notification';
import { LoaderService } from '../../services/loader';
import { PostService } from '../../services/post';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import * as CoreActions from './core.actions';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CoreEffects {
  private router = inject(Router);
  private actions$ = inject(Actions);
  private loader = inject(LoaderService);
  private postService = inject(PostService);
  private notification = inject(NotificationService);

  loadPostListRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.loadPostListRequest),
      tap(() => this.loader.open('Loading posts...')),
      switchMap(() =>
        this.postService.getPostsFakeCall().pipe(
          map((post) => CoreActions.loadPostListSuccess({ payload: post })),
          catchError(() => of(CoreActions.loadPostListError()))
        )
      ),
      tap(() => this.loader.close())
    )
  );

  loadPostListError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.loadPostListError),
        map(() => this.notification.error('Error loading post list'))
      ),
    { dispatch: false }
  );

  navigateToPostDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.navigateToPostDetails),
        tap(({ payload: { id } }) =>
          this.router.navigate(['/post/details', id])
        )
      ),
    { dispatch: false }
  );

  navigateToUserDetails$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.navigateToUserDetails),
        tap(() => this.loader.open('Loagind user info...')),
        tap(({ payload }) => this.router.navigate(['/user/details', payload])),
        tap(() => this.loader.close())
      ),
    { dispatch: false }
  );

  navigateToPostList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.navigateToPostList),
        tap(() => this.router.navigate(['/post/list']))
      ),
    { dispatch: false }
  );
}

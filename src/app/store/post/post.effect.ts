import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from 'src/app/main/services/post.service';
import { PostStore } from './post.store';
import { EMPTY, catchError, map, mergeMap } from 'rxjs';

@Injectable()
export class PostEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostStore.actions.getPosts),
      mergeMap(() =>
        this.service.getPosts().pipe(
          map((data) => PostStore.mutators.postsLoaded({ data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostStore.actions.create),
      mergeMap(({ data }) =>
        this.service.create(data).pipe(
          map((data) => PostStore.mutators.created({ data })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: PostService) {}
}

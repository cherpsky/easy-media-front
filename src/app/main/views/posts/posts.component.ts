import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthStore } from 'src/app/store/auth/auth.store';
import { PostStore } from 'src/app/store/post/post.store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$ = this.store.select(PostStore.selectors.posts);
  userId: number | undefined;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(PostStore.actions.getPosts());

    this.store
      .select(AuthStore.selectors.user)
      .pipe(filter((user) => user !== undefined))
      .subscribe((user) => (this.userId = user!.id));
  }

  ownerChanged(event: Event) {
    const target = <HTMLSelectElement>event.target;
    const value = target.value;
    if (value === 'all')
      this.posts$ = this.store.select(PostStore.selectors.posts);
    else
      this.posts$ = this.store.select(
        PostStore.selectors.postsByUser(this.userId!)
      );
  }
}

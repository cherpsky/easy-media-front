import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { Post } from 'src/app/models/post.model';
import { CreatePostRequest } from 'src/dtos/requests/create-post.request';

export const postKey = 'Post';
interface PostState {
  posts: Post[];
  loading: boolean;
}

const postState: PostState = {
  posts: [],
  loading: false,
};

const selectors = {
  state: createFeatureSelector<PostState>(postKey),
  get posts() {
    return createSelector(this.state, (state) => state.posts);
  },
  postsByUser(userId: number) {
    return createSelector(this.state, (state) =>
      state.posts.filter((post) => post.userId === userId)
    );
  },
};

const actions = {
  create: createAction(
    `[${postKey}] Create`,
    props<{ data: CreatePostRequest }>()
  ),
  getPosts: createAction(`[${postKey}] Get posts`),
};

const mutators = {
  created: createAction(`[${postKey}] Created`, props<{ data: Post }>()),
  postsLoaded: createAction(
    `[${postKey}] Posts loaded`,
    props<{ data: Post[] }>()
  ),
};

export const PostStore = { selectors, actions, mutators };

export const postReducer = createReducer(
  postState,
  on(mutators.created, (state, { data }) => ({
    ...state,
    posts: [new Post(data), ...state.posts],
  })),
  on(mutators.postsLoaded, (state, { data }) => ({
    ...state,
    posts: data.map((post) => new Post(post)),
  }))
);

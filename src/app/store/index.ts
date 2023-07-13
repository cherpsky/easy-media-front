import { AuthEffects } from './auth/auth.effect';
import { authKey, authReducer } from './auth/auth.store';
import { PostEffects } from './post/post.effect';
import { postKey, postReducer } from './post/post.store';

export const reducers = {
  [authKey]: authReducer,
  [postKey]: postReducer,
};
export const effects = [AuthEffects, PostEffects];

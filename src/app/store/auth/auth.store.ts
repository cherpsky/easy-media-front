import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { LoginRequest } from 'src/dtos/requests/login.request';
import { RegisterRequest } from 'src/dtos/requests/register.request';
import { LoginResponse } from 'src/dtos/response/login.response';

export const authKey = 'Auth';
interface AuthState {
  loading: boolean;
  logged: boolean;
  user: User | undefined;
  token: string | undefined;
}

const authState: AuthState = {
  loading: false,
  logged: false,
  token: undefined,
  user: undefined,
};

const selectors = {
  state: createFeatureSelector<AuthState>(authKey),
  get isLogged() {
    return createSelector(this.state, (state) => state.logged);
  },
  get isLoading() {
    return createSelector(this.state, (state) => state.loading);
  },
  get user() {
    return createSelector(this.state, (state) => state.user);
  },
  get token() {
    return createSelector(this.state, (state) => state.token);
  },
};

const actions = {
  login: createAction(`[${authKey}] Login`, props<{ data: LoginRequest }>()),
  register: createAction(
    `[${authKey}] Register`,
    props<{ data: RegisterRequest }>()
  ),
};

const mutators = {
  logged: createAction(`[${authKey}] Logged`, props<{ data: LoginResponse }>()),
  registered: createAction(
    `[${authKey}] Registered`,
    props<{ data: boolean }>()
  ),
  clearSession: createAction(`[${authKey}] Clear session`),
};

export const authReducer = createReducer(
  authState,
  on(mutators.logged, (state, { data }) => ({
    ...state,
    logged: true,
    token: data.accessToken,
    user: data.user,
    loading: false,
  })),
  on(mutators.clearSession, (state) => ({
    ...state,
    logged: false,
    user: undefined,
    token: undefined,
  }))
);
export const AuthStore = { selectors, actions, mutators };

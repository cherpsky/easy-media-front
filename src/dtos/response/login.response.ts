import { User } from 'src/app/models/user.model';

export class LoginResponse {
  accessToken: string;
  user: User;

  constructor(response: LoginResponse) {
    this.accessToken = response.accessToken;
    this.user = new User(response.user);
  }
}

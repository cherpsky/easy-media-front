export class User {
  id: number;
  name: string;
  email: string;

  constructor(user: Pick<User, 'id' | 'name' | 'email'>) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
  }
}

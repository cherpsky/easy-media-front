export class Post {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt: Date;

  constructor(
    post: Pick<Post, 'id' | 'title' | 'description' | 'userId' | 'createdAt'>
  ) {
    this.id = post.id;
    this.description = post.description;
    this.title = post.title;
    this.userId = post.userId;
    this.createdAt = new Date(post.createdAt);
  }
}

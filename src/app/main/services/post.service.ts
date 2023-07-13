import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { CreatePostRequest } from 'src/dtos/requests/create-post.request';
import { BaseHttpService } from 'src/services/base-http.service';

@Injectable({ providedIn: 'root' })
export class PostService extends BaseHttpService {
  constructor() {
    super('posts');
  }

  public create(data: CreatePostRequest): Observable<Post> {
    return this.http.post<Post>(this.getUrl(), data);
  }

  public getMyPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getUrl('my-posts'));
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getUrl());
  }
}

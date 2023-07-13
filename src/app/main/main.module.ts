import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostsComponent } from './views/posts/posts.component';
import { MainRoutingModule } from './routing/main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostItemComponent } from './components/post-item/post-item.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-interceptor';

@NgModule({
  imports: [CommonModule, MainRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    MainLayoutComponent,
    CreatePostComponent,
    PostsComponent,
    PostItemComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class MainModule {}

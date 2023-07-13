import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostsComponent } from './views/posts/posts.component';
import { MainRoutingModule } from './routing/main-routing.module';

@NgModule({
  imports: [CommonModule, MainRoutingModule],
  declarations: [MainLayoutComponent, CreatePostComponent, PostsComponent],
})
export class MainModule {}

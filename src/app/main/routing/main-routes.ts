import { Routes } from '@angular/router';
import { AppModules } from 'src/enum/app-modules.enum';
import { MainRoutes } from 'src/enum/main-routes.enum';
import { CreatePostComponent } from '../views/create-post/create-post.component';
import { PostsComponent } from '../views/posts/posts.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

export const mainRoutes: Routes = [
  {
    path: AppModules.MAIN,
    component: MainLayoutComponent,
    children: [
      { path: MainRoutes.CREATE_POST, component: CreatePostComponent },
      { path: MainRoutes.POSTS, component: PostsComponent },
    ],
  },
];

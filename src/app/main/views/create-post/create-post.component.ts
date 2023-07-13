import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { skip } from 'rxjs';
import { AuthStore } from 'src/app/store/auth/auth.store';
import { PostStore } from 'src/app/store/post/post.store';
import { CreatePostRequest } from 'src/dtos/requests/create-post.request';
import { AppModules } from 'src/enum/app-modules.enum';
import { MainRoutes } from 'src/enum/main-routes.enum';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup<{
    title: FormControl<undefined | string>;
    description: FormControl<undefined | string>;
  }>;

  user$ = this.store.select(AuthStore.selectors.user);

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store,
    private actionObserver$: ActionsSubject
  ) {
    this.postForm = this.formBuilder.group({
      title: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(30)],
      }),
      description: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(300)],
      }),
    });
  }

  ngOnInit() {
    this.actionObserver$
      .pipe(skip(1), ofType(PostStore.mutators.created))
      .subscribe(({ data }) => {
        alert('Successfull post creation');
        this.router.navigate([AppModules.MAIN, MainRoutes.POSTS]);
      });
  }

  onSubmit(): void {
    const { title, description } = this.postForm.value;
    const data: CreatePostRequest = {
      title: title!,
      description: description!,
    };

    this.store.dispatch(PostStore.actions.create({ data }));
  }
}

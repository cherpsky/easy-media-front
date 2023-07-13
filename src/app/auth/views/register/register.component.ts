import { Component, OnInit } from '@angular/core';
import {
  FormArrayName,
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
import { RegisterRequest } from 'src/dtos/requests/register.request';
import { AppModules } from 'src/enum/app-modules.enum';
import { AuthRoutes } from 'src/enum/auth-routes.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup<{
    name: FormControl<string | undefined>;
    email: FormControl<string | undefined>;
    password: FormControl<string | undefined>;
    passwordConfirmation: FormControl<string | undefined>;
  }>;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private actionsListener: ActionsSubject,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required],
      }),
      passwordConfirmation: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {
    this.actionsListener
      .pipe(skip(1), ofType(AuthStore.mutators.registered))
      .subscribe(({ data }) => {
        alert('Successfull registration, now login');
        this.router.navigate([AppModules.AUTH, AuthRoutes.LOGIN]);
      });
  }

  onSubmit() {
    const { name, email, password } = this.registerForm.value;
    const data: RegisterRequest = {
      name: name!,
      email: email!,
      password: password!,
    };

    this.store.dispatch(AuthStore.actions.register({ data }));
  }
}

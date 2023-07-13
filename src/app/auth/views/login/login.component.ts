import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthStore } from 'src/app/store/auth/auth.store';
import { LoginRequest } from 'src/dtos/requests/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup<{
    email: FormControl<string | undefined>;
    password: FormControl<string | undefined>;
  }>;

  constructor(private store: Store, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl<string | undefined>(undefined, {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  ngOnInit() {}

  onSubmit() {
    const { email, password } = this.loginForm.value;
    const data: LoginRequest = {
      email: email!,
      password: password!,
    };

    this.store.dispatch(AuthStore.actions.login({ data }));
  }
}

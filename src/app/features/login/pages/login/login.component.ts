import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../apis/login.service';
import { UserCredential } from '../../models/user-credential.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  message: string = '';

  constructor(
    fb: FormBuilder,
    private service: LoginService,
    private router: Router
  ) {
    this.form = this.createFormGroup(fb);
  }

  ngOnInit(): void {}

  createFormGroup(fb: FormBuilder) {
    return fb.group({
      username: [null, [Validators.required, Validators.minLength(3)]],
      password: [null, Validators.required]
    });
  }

  login() {
    debugger;
    if (this.form.valid) {
      this.loading = true;
      const formValue = this.form.value;
      const user: UserCredential = {
        username: formValue.username,
        password: formValue.password
      };
      debugger;
      this.service.login(user).subscribe(
        (result) => {
          this.loading = false;
          localStorage.setItem('a_token', result.authToken);
          this.router.navigate(['/offers']);
        },
        (error) => {
          this.loading = false;
          if (error.status === 401) {
            this.message = 'Incorrect username or Password';
          } else {
            this.message = 'Sorry an error occurred. Please try again.';
          }
        }
      );
    } else {
      return;
    }
  }
}

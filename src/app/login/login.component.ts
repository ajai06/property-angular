import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  submitted = false;
  emailError;
  passwordError;
  successMsg;
  activationError;
  linkError;

  ngOnInit() {
  }

  get check() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
       return;
    } else {
      this.authService.login(this.loginForm.value).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        err => {
          console.log(err);
          this.activationError = err.error.activationError;
          this.emailError = err.error.error;
          this.passwordError = err.error.passwordError;
          this.linkError = err.error.linkError;
        }
      );
    }
  }


}

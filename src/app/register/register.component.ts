import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PasswordValidator } from '../shared/password.validator';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  static successMsg: any;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  registerForm = this.fb.group({
    userName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, {validators: PasswordValidator});

  submitted = false;
  emailError;
  successMsg;

  ngOnInit() {
  }

  get check() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    } else {
      this.authService.register(this.registerForm.value).subscribe(
        res => {
          console.log(res);
          this.successMsg = res.message;
          this.router.navigate(['/login']);
          this.registerForm.reset();

        },
        err => {
          console.log(err);
          this.emailError = err.error.error;
        }
      );
    }
  }


}

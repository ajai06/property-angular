import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-resend-mail',
  templateUrl: './resend-mail.component.html',
  styleUrls: ['./resend-mail.component.css']
})
export class ResendMailComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private location: Location) { }

  resendForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  submitted = false;
  activationError;
  passwordError;
  emailError;
  resendSuccess;

  ngOnInit() {
  }

  get check() {
    return this.resendForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.resendForm.invalid) {
      return;
    } else {
      this.authService.resend(this.resendForm.value).subscribe(
        res => {
          console.log(res);
          this.resendSuccess = res.resendMail;
        },
        err => {
          console.log(err);
          this.emailError = err.error.error;
          this.passwordError = err.error.passwordError;
          this.activationError = err.error.activationError;
        }
      );
    }
  }

  back() {
    this.location.back();
  }

}

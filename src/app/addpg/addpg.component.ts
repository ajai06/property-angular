import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PglistService } from '../pglist.service';

@Component({
  selector: 'app-addpg',
  templateUrl: './addpg.component.html',
  styleUrls: ['./addpg.component.css']
})
export class AddpgComponent implements OnInit {


  submitted = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private pglistService: PglistService) { }


  addpgForm =  this.fb.group({
    name: [ '', [Validators.required]],
    mobile: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    city: ['', [Validators.required]],
    location: ['', [Validators.required]],
    availableFor: ['', [Validators.required]],
    occupancy: ['', [Validators.required]],
    bathroom: ['', [Validators.required]],
    balcony: ['', [Validators.required]],
    parking: ['', [Validators.required]],
    furnishDetails: this.fb.group({
      ac: [''],
      tv: [''],
      fridge: [''],
      washingMachine: [''],
      wifi: ['']
    }),
    rent: ['', [Validators.required]]
  });

  get check() {
    return this.addpgForm.controls;
  }
  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.addpgForm.invalid) {
      return;
    } else {
      this.pglistService.postPglist(this.addpgForm.value).subscribe(
        res => {
          this.router.navigate(['/dashboard']);
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
      console.log(this.addpgForm.value);
    }

  }


}

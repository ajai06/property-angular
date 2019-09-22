import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PglistService } from '../pglist.service';

@Component({
  selector: 'app-pg-deatils',
  templateUrl: './pg-deatils.component.html',
  styleUrls: ['./pg-deatils.component.css']
})
export class PgDeatilsComponent implements OnInit {

  public id;
  pg;
  constructor(private pglistService: PglistService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getPgDetails();
  }

  getPgDetails() {
    this.id = this.activatedRoute.snapshot.paramMap.get('_id');
    console.log(this.id);
    this.pglistService.getPg(this.id).subscribe(
      res => {
        this.pg = res.pg;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }

}

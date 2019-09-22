import { Component, OnInit } from '@angular/core';
import { PglistService } from '../pglist.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pglists = [];

  constructor(private pglistService: PglistService,
              private authService: AuthService) { }

  ngOnInit() {
    this.pglistService.getPglist().subscribe(
      res => {
        this.pglists = res.pglist;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }


}

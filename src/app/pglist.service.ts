import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PglistService {

  pglistUrl = 'http://localhost:3000/pglist';
  addPgUrl = 'http://localhost:3000/addpg';
  getPgUrl = 'http://localhost:3000/pg';

  constructor(private http: HttpClient) { }

  getPglist(): Observable<any> {
    return this.http.get<any>(this.pglistUrl);
  }

  postPglist(pgData) {
    return this.http.post<any>(this.addPgUrl, pgData);
  }

  getPg(id) {
    const Url = `${this.getPgUrl}/${id}`;
    return this.http.get<any>(Url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerUrl = 'http://localhost:3000/register';
  loginUrl = 'http://localhost:3000/login';
  resendUrl = 'http://localhost:3000/resend';

  constructor(private http: HttpClient,
              private router: Router) { }

  register(form) {
    return this.http.post<any>(this.registerUrl, form);
  }

  login(loginform): Observable<any> {
    return this.http.post<any>(this.loginUrl, loginform);
  }

  resend(resendEmail) {
    return this.http.post<any>(this.resendUrl, resendEmail);
  }

  loggedIn() {
    return !! localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }


}

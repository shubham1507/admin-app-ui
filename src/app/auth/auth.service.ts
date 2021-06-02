import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }
  
  public isAuthenticated(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(user) {
    return this.http.post(`${environment.apiURL}/login/`, user)
      .pipe(map(token => {
        localStorage.setItem('token', token['token']);
        return token;
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigate(['/login'])
}
}

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/public/';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  login(obj): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: obj.username,
      password: obj.password
    }, this.httpOptions);
  }

  register(obj): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: obj.username,
      password: obj.password,
      email: obj.email
    }, this.httpOptions);
  }

  verify(code:string): Observable<any> {
    console.log(code)
    return this.http.post(AUTH_API + 'verify', {
      code: code
    }, this.httpOptions);
  }
}

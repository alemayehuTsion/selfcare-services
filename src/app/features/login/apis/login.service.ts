import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserCredential } from '../models/user-credential.model';
import { LoginEndpoint } from './login.endpoint';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(data: UserCredential): Observable<any> {
    return this.http.post<any>(`${LoginEndpoint.login}`, data);
  }
}

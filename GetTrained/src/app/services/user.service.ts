import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  selectedUser: User = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  postUser(user: User) {  // add a user
    return this.http.post(environment.apiBaseUrl + '/register', user);
  }
  activate(token: String) { // activate
    return this.http.put(environment.apiBaseUrl + '/activate/' + token, token);
  }
  loginUser(user: User) { // login of user
    return this.http.post(environment.apiBaseUrl + '/login', { 'email': user.email, 'password': user.password });
  }
  getUsers() { // list of users
    return this.http.get(`${environment.apiBaseUrl}/users`);
  }
  updateUser(req: any) { // update users
    return this.http.put(environment.apiBaseUrl + '/updateprogress', req );
  }
}

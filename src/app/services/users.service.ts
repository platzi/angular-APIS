import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { User, CreateUserDTO } from './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.API_URL}/api/users`;

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUserDTO) {
    return this.http.post<User>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<User[]>(this.apiUrl);
  }
}

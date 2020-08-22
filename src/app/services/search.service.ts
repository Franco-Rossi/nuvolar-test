import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(protected http: HttpClient) {}

  searchUsers(search: string) {
    return this.http.get(`${environment.apiSearch}/search/users?q=${search}`);
  }

  getUser(id: string) {
    return this.http.get<User>(`${environment.apiSearch}/users/${id}`);
  }
}

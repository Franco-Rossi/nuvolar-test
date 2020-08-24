import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Follower } from '../models/follower.model';

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

  getUserRepos(id: string) {
    return this.http.get(`${environment.apiSearch}/users/${id}/repos`);
  }

  getUserFollowers(id: string) {
    return this.http.get<Follower[]>(`${environment.apiSearch}/users/${id}/followers`);
  }

  getRateLimit() {
    return this.http.get<Follower[]>(`${environment.apiSearch}/rate_limit`);
  }
}

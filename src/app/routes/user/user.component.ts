import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { User } from '../../models/user.model';
import { Follower } from '../../models/follower.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(protected activatedRoute: ActivatedRoute, protected searchService: SearchService) {
    this.activatedRoute.params.subscribe(async (params) => {
      if (params.id) {
        await this.searchUserProfile(params.id);
      }
    });
  }

  user: User;
  followers: Follower[];
  repos;
  error: boolean = false;
  rate_limit: string;

  ngOnInit(): void {}

  searchUserProfile(id) {
    this.searchService.getUser(id).subscribe(
      (success) => {
        this.user = success;
        this.error = false;
      },
      (error) => {
        this.getRateLimit();
      }
    );

    this.searchService.getUserRepos(id).subscribe((success) => {
      this.repos = success;
    });

    this.searchService.getUserFollowers(id).subscribe((success) => {
      this.followers = success;
    });
  }

  getRateLimit() {
    this.searchService.getRateLimit().subscribe((success) => {
      this.error = true;
      this.rate_limit = this.unixToTime(success['rate']['reset']);
    });
  }

  unixToTime(unix) {
    var d = new Date(unix * 1000),
      hh = d.getHours(),
      h = hh,
      min = ('0' + d.getMinutes()).slice(-2),
      time;

    time = h + ':' + min;

    return time;
  }
}

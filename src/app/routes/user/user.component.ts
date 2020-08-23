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

  ngOnInit(): void {}

  searchUserProfile(id) {
    this.searchService.getUser(id).subscribe((success) => {
      this.user = success;
      console.log(this.user);
    });

    // this.user = {
    //   login: 'octocat',
    //   id: 1,
    //   node_id: 'MDQ6VXNlcjE=',
    //   avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    //   gravatar_id: '',
    //   url: 'https://api.github.com/users/octocat',
    //   html_url: 'https://github.com/octocat',
    //   followers_url: 'https://api.github.com/users/octocat/followers',
    //   following_url: 'https://api.github.com/users/octocat/following{/other_user}',
    //   gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    //   starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    //   subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    //   organizations_url: 'https://api.github.com/users/octocat/orgs',
    //   repos_url: 'https://api.github.com/users/octocat/repos',
    //   events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    //   received_events_url: 'https://api.github.com/users/octocat/received_events',
    //   type: 'User',
    //   site_admin: false,
    //   name: 'monalisa octocat',
    //   company: 'GitHub',
    //   blog: 'https://github.com/blog',
    //   location: 'San Francisco',
    //   email: 'octocat@github.com',
    //   hireable: false,
    //   bio: 'There once was...',
    //   twitter_username: 'monatheoctocat',
    //   public_repos: 2,
    //   public_gists: 1,
    //   followers: 20,
    //   following: 0,
    //   created_at: '2008-01-14T04:33:35Z',
    //   updated_at: '2008-01-14T04:33:35Z',
    // };

    this.searchService.getUserRepos(id).subscribe((success) => {
      this.repos = success;
      console.log(this.repos);
    });

    this.searchService.getUserFollowers(id).subscribe((success) => {
      this.followers = success;
      console.log(this.followers);
    });
  }

  getUserInfo() {}
}

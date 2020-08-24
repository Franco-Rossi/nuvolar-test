import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, protected searchService: SearchService) {}

  searchInput: string;
  users: any[];
  error: boolean = false;
  rate_limit: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.input) {
        this.searchInput = params.input;
        this.searchUser();
      }
    });
  }

  searchUser() {
    this.searchService.searchUsers(this.searchInput).subscribe(
      (success) => {
        this.users = success['items'];
        this.error = false;
      },
      (error) => {
        this.getRateLimit();
      }
    );
  }

  getRateLimit() {
    this.searchService.getRateLimit().subscribe((success) => {
      this.error = true;
      this.rate_limit = this.unixToTime(success['resources']['search']['reset']);
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

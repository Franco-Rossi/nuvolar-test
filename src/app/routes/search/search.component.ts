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

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.input) {
        this.searchInput = params.input;
        this.searchUser();
      }
    });
  }

  searchUser() {
    this.searchService.searchUsers(this.searchInput).subscribe((success) => {
      this.users = success['items'];
    });
  }
}

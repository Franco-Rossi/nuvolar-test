import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { User } from '../../models/user.model';

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

  ngOnInit(): void {}

  searchUserProfile(id) {
    this.searchService.getUser(id).subscribe((success) => {
      this.user = success;
      console.log(this.user);
    });
  }
}

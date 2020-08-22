import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  constructor(protected searchService: SearchService, protected activatedRoute: ActivatedRoute) {}

  search: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.input) {
        this.search = params.input;
      }
    });
  }
}

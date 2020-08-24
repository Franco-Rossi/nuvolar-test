import { Component, OnInit } from '@angular/core';
import { ThemesService } from '../../services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public themes: ThemesService) {}

  currentTheme: boolean;

  ngOnInit(): void {}

  setTheme() {
    this.currentTheme ? this.themes.setTheme('B') : this.themes.setTheme('A');
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
  host: { class: 'col-12 col-md-6 col-xl-3' },
})
export class UserBlockComponent implements OnInit {
  @Input() user;

  constructor() {}

  ngOnInit(): void {}
}

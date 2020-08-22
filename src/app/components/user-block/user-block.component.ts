import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrls: ['./user-block.component.scss'],
})
export class UserBlockComponent implements OnInit {
  @Input() user;

  constructor() {}

  ngOnInit(): void {}
}

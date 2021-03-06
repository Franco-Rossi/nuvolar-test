import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader, slider],
})
export class AppComponent {
  title = 'nuvolar';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'evb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  donut = {
    thickness: 10,
    progress: 40,
    diameter: 240,
    invertDirection: false,
    showText: false
  };

  progressbar = {
    progress: 20
  };
}

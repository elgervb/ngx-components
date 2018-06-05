import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-spinner-balls',
  template: `
    <div class="spinner-ball"></div>
    <div class="spinner-ball"></div>
    <div class="spinner-ball"></div>
  `,
  styleUrls: ['./spinner-balls.component.scss']
})
export class SpinnerBallsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

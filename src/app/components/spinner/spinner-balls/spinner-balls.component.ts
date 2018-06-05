import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-spinner-balls',
  template: `
    <div class="spinner-ball spinner-ball-1"></div>
    <div class="spinner-ball spinner-ball-2"></div>
    <div class="spinner-ball spinner-ball-3"></div>
  `,
  styleUrls: ['./spinner-balls.component.scss']
})
export class SpinnerBallsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

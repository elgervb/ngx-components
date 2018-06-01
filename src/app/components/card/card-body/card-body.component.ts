import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'evb-card-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

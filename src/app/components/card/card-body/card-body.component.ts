import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-card-body',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

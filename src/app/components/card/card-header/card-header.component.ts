import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-card-header',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-header.component.scss']
})
export class CardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

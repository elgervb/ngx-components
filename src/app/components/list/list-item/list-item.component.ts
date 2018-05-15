import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-list-item',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

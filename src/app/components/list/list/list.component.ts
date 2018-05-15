import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evb-list',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // tslint:disable-next-line no-any item can be of any time
  @Input() items: any[];

  constructor() { }

  ngOnInit() { }
}

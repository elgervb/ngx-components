import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { NgForOfContext } from '@angular/common';

import { filter } from '../list-filter/filters';

@Component({
  selector: 'evb-list',
  template: `
    <ul class="list">
      <li *ngIf="filterEnabled" class="list__filter">
        <evb-list-filter [items]="items" (filter)="onFilter($event)"></evb-list-filter>
      </li>
      <ng-container *ngFor="let item of filteredItems; index as index; odd as odd; even as even; first as first; last as last">
        <li [class.odd]="odd">
          <ng-container *ngTemplateOutlet="itemTemplate; context:
            {$implicit: item, index: index, odd: odd, even: even, first: first, last: last}"></ng-container>
        </li>
      </ng-container>
    </ul>
  `,
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // tslint:disable-next-line no-any item can be of any time
  @Input() items: any[];
  @Input() filterEnabled = true;

  // tslint:disable-next-line no-any item can be of any time
  @ContentChild(TemplateRef) itemTemplate: TemplateRef<NgForOfContext<any>>;

  // tslint:disable-next-line no-any item can be of any time
  filteredItems: any[];

  constructor() { }

  ngOnInit() {
    this.filteredItems = this.items;
  }

  onFilter(filterStr: string) {
    this.filteredItems = this.items.filter(item => filter(item, filterStr));
  }

}

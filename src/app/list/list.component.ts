import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
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

  @Input() items: any[];

  @Input() filterEnabled = true;

  @ContentChild(TemplateRef) itemTemplate: TemplateRef<NgForOfContext<any>>;

  private filteredItems: any[];

  constructor() { }

  ngOnInit() {
    this.filteredItems = this.items;
  }

  onFilter(filterStr: string) {
    this.filteredItems = this.items.filter(item => filter(item, filterStr));
  }

}

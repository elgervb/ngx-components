import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const DELAY_MS = 200;

@Component({
  selector: 'evb-list-filter',
  template: `
    <input type="text" class="form-control from-control--filter"
      [placeholder]="placeholder"
      (input)="onFilter($event.currentTarget.value)">
  `,
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  // tslint:disable-next-line no-any items can be of any type
  @Input() items: any[];
  @Input() placeholder = 'Filter...';
  @Output() filter = new EventEmitter<string>();

  private filterSubject = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.filterSubject
      .pipe(distinctUntilChanged(), debounceTime<string>(DELAY_MS))
      .subscribe(filter => this.filter.emit(filter));
  }

  onFilter(filter: string) {
    this.filterSubject.next(filter);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

const DEBOUNCE_TIME = 200;

@Component({
  selector: 'evb-list-filter',
  template: `
    <div class="list__filter">
      <input type="text" class="form-control from-control--filter"
        placeholder="Filter..."
        (input)="onFilter($event.currentTarget.value)">
    </div>
  `,
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit {

  // tslint:disable-next-line no-any item can be of any time
  @Input() items: any[];
  @Output() filter = new EventEmitter<string>();

  private filterSubject = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.filterSubject
      .pipe(distinctUntilChanged(), debounceTime<string>(DEBOUNCE_TIME))
      .subscribe(filter => this.filter.emit(filter));
  }

  onFilter(filter: string) {
    this.filterSubject.next(filter);
  }
}

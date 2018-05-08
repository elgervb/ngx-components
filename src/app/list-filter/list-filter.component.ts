import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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

  @Input() items: any[];
  @Output() filter = new EventEmitter<string>();

  private filterSubject = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.filterSubject
      .pipe(distinctUntilChanged(), debounceTime<string>(200))
      .subscribe(filter => this.filter.emit(filter));
  }

  onFilter(filter: string) {
    this.filterSubject.next(filter);
  }
}

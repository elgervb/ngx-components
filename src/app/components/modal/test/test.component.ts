import { Component, OnInit } from '@angular/core';
import { ActiveModal } from '../services/active.modal';

@Component({
  selector: 'evb-test',
  template: `<p>Modal works! <button (click)="close()">close</button></p>`,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private modal: ActiveModal) { }

  ngOnInit() {
  }

  close() {
    this.modal.close();
  }

}

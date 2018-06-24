import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-test',
  template: `
    <p>
      test works!
    </p>
  `,
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

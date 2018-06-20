import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evb-alert',
  template: `
    <p>
      alert works!
    </p>
  `,
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

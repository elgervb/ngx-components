import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evb-card-footer',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {

  @Input() align: 'right' | 'left' | 'center' | 'justify';

  constructor() { }

  ngOnInit() {
  }

}

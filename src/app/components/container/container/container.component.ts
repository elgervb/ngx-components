import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evb-container',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() class = '';
  @Input() dir?: 'row' | 'col';
  @Input() justify: 'left' | 'right' | 'center' | 'around' | 'evenly' | 'between';
  @Input() root: boolean;

  @HostBinding('class')
  get hostClasses(): string {
    const dirClass = this.dir ? `evb-container--${this.dir}` : '';
    const rootClass = this.root ? 'evb-container--root' : '';
    const justifyClass = this.justify ? `evb-container--${this.justify}` : '';
    return `${this.class} evb-container ${dirClass} ${rootClass} ${justifyClass}`.trim();
  }

  constructor() { }

  ngOnInit() {
  }

}

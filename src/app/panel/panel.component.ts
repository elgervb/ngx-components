import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'evb-panel',
  template: `
    <div class="evb-panel {{class}}"
      [class.evb-panel--row]="dir==='row'"
      [class.evb-panel--col]="dir==='col'">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() class?: string;
  @Input() dir: 'row' | 'col';

  constructor() { }

  ngOnInit() {
  }

}

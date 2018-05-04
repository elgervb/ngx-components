import { Component, OnInit, Input, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'evb-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

  @Input() name: string;
  @Input() selected = false;

  visited = false;

  @HostBinding('class.wizard-step--selected')
  get isSelected() {
    return this.selected;
  }

  constructor() { }

  ngOnInit() {
  }
}

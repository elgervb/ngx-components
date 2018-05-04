import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'evb-wizard-header',
  templateUrl: './wizard-header.component.html',
  styleUrls: ['./wizard-header.component.scss']
})
export class WizardHeaderComponent implements OnInit {

  @Input() steps: WizardStepComponent[];
  @Output() selectionChange = new EventEmitter<WizardStepComponent>();

  constructor() { }

  ngOnInit() {
  }

  isSelected(name: string) {
    const selected = this.steps.filter(step => step.name === name && step.selected);
    return selected.length > 0;
  }

  setSelected(step: WizardStepComponent) {
    this.selectionChange.emit(step);
  }

}
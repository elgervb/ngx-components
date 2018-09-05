import { Component, EventEmitter, Input, Output } from '@angular/core';

import { WizardStepComponent } from '../wizard-step/wizard-step.component';
@Component({
  selector: 'evb-wizard-footer',
  templateUrl: './wizard-footer.component.html',
  styleUrls: ['./wizard-footer.component.scss']
})
export class WizardFooterComponent {

  @Input() btnPreviousText = 'Previous';
  @Input() btnNextText = 'Next';
  @Input() btnCompleteText = 'Complete';

  @Input() steps?: WizardStepComponent[];

  @Output() readonly next = new EventEmitter<void>();
  @Output() readonly previous = new EventEmitter<void>();
  @Output() readonly completed = new EventEmitter<void>();

  hasNext() {
    if (!this.steps) { return false; }

    return this.steps.reduce((value, step, index, all) => {
      if (step.selected) {
        return all.length - 1 > index;
      }
      return value;
    }, true);
  }

  hasPrevious() {
    if (!this.steps) { return false; }

    return this.steps.reduce((value, step, index, all) => {
      if (step.selected) {
        return index > 0;
      }
      return value;
    }, false);
  }

  isValid() {
    if (!this.steps) { return true; }

    const currentStep = this.steps.find(step => step.selected);
    return currentStep ? currentStep.canExit : true;
  }

  navigateNext() {
    this.next.emit();
  }

  navigatePrevious() {
    this.previous.emit();
  }

  sendComplete() {
    this.completed.emit();
  }
}

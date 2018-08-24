import { Component, Input, Output, EventEmitter } from '@angular/core';
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

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  // tslint:disable-next-line no-output-named-after-standard-event
  @Output() complete = new EventEmitter<void>();

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
    this.complete.emit();
  }
}

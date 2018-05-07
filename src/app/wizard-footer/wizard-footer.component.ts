import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { nextTick } from 'q';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'evb-wizard-footer',
  templateUrl: './wizard-footer.component.html',
  styleUrls: ['./wizard-footer.component.scss']
})
export class WizardFooterComponent implements OnInit {

  @Input() btnPreviousText = 'Previous';
  @Input() btnNextText = 'Next';
  @Input() btnCompleteText = 'Complete';

  @Input() steps: WizardStepComponent[];

  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Output() complete = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  hasNext() {
    return this.steps.reduce((value, step, index, all) => {
      if (step.selected) {
        return all.length - 1 > index;
      }
      return value;
    }, true);
  }

  hasPrevious() {
    return this.steps.reduce((value, step, index, all) => {
      if (step.selected) {
        return index > 0;
      }
      return value;
    }, false);
  }

  isValid() {
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

import {
  AfterContentInit, Component, ContentChild, ContentChildren, EventEmitter, OnDestroy, OnInit, Output, QueryList
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { WizardFooterComponent } from '../wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from '../wizard-header/wizard-header.component';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

@Component({
  selector: 'evb-wizard',
  templateUrl: './wizard.component.html'
})
export class WizardComponent implements OnInit, OnDestroy, AfterContentInit {

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;
  @ContentChild(WizardFooterComponent) footer: WizardFooterComponent;
  @ContentChild(WizardHeaderComponent) header: WizardHeaderComponent;

  @Output() readonly completed = new EventEmitter<void>();

  get currentStep(): WizardStepComponent {
    return this.steps && this.steps.find(step => step.selected);
  }

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getStep(name: string) {
    return this.steps.find(step => step.name === name);
  }

  ngAfterContentInit() {
    // set default selected
    this.navigateTo();

    if (this.header) {
      this.header.steps = this.steps.toArray();

      this.header.selectionChange
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(step => this.navigateTo(step));
    }

    if (this.footer) {
      this.footer.steps = this.steps.toArray();

      this.footer.next
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => this.navigateNext());

      this.footer.previous
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => this.navigatePrevious());

      this.footer.completed
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(() => this.completed.emit());
    }
  }

  navigateNext() {
    if (this.currentStep && this.currentStep.canExit) {
      const next = this.steps.reduce((cur, step, index, all) => {
        if (this.currentStep.name === step.name && all.length - 1 > index) {
          return all[index + 1];
        }
        return cur;
      }, this.currentStep);

      this.navigateTo(next);
    }
  }

  navigatePrevious() {
    if (this.currentStep && this.currentStep.canExit) {
      const next = this.steps.reduce((cur, step, index, all) => {
        if (this.currentStep.name === step.name && index > 0) {
          return all[index - 1];
        }
        return cur;
      }, this.currentStep);

      this.navigateTo(next);
    }
  }

  navigateTo(step?: WizardStepComponent) {
    if (this.currentStep && !this.currentStep.canExit) {
      return;
    }
    // deselect all
    this.steps.forEach(current => current.selected = false);

    if (step) {
      // find selected step
      const selected = this.steps.find(find => find === step);
      selected.selected = true;
      selected.visited = true;
    } else {
      // select the first step
      if (this.steps.length > 1) {
        this.steps.first.selected = true;
        this.steps.first.visited = true;
      }
    }
  }

}

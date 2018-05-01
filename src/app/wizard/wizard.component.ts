import {
  Component, OnInit, Output, EventEmitter, OnDestroy, AfterContentInit, QueryList, ContentChildren, ViewChild, ContentChild
} from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { ThrowStmt } from '@angular/compiler';
import { WizardFooterComponent } from '../wizard-footer/wizard-footer.component';
import { WizardHeaderComponent } from '../wizard-header/wizard-header.component';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'evb-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit, OnDestroy, AfterContentInit {

  @ContentChildren(WizardStepComponent) steps: QueryList<WizardStepComponent>;
  @ContentChild(WizardFooterComponent) footer: WizardFooterComponent;
  @ContentChild(WizardHeaderComponent) header: WizardHeaderComponent;

  @Output() complete = new EventEmitter<void>();

  get currentStep() {
    return this.steps.find(step => step.selected);
  }

  private unsubscribe = new Subject<void>();

  constructor() { }

  ngOnInit() { }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngAfterContentInit() {
    // set default selected
    this.navigateTo();

    if (this.header) {
      this.header.steps = this.steps.toArray();

      this.header.selectionChange
        .takeUntil(this.unsubscribe)
        .subscribe(step => this.navigateTo(step));
    }

    if (this.footer) {
      this.footer.steps = this.steps.toArray();

      this.footer.next
        .takeUntil(this.unsubscribe)
        .subscribe(() => this.navigateNext());

      this.footer.previous
        .takeUntil(this.unsubscribe)
        .subscribe(() => this.navigatePrevious());

      this.footer.complete
        .takeUntil(this.unsubscribe)
        .subscribe(() => this.complete.emit());
    }
  }

  navigateNext() {
    if (this.currentStep) {
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
    if (this.currentStep) {
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

import { Component, OnInit, Input, HostBinding, QueryList, ContentChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'evb-wizard-step',
  template: '<ng-content *ngIf="visited"></ng-content>',
  styleUrls: ['./wizard-step.component.scss']
})
export class WizardStepComponent implements OnInit {

  @Input() name: string;
  @Input() selected = false;
  @Input()
  get canExit() {
    return this.formValid() && this.exitAllowed;
  }
  set canExit(value) {
    this.exitAllowed = value;
  }

  visited = false;
  private exitAllowed = true;

  @ContentChildren(NgForm, { descendants: true }) forms: QueryList<NgForm>;

  @HostBinding('class.wizard-step--selected')
  get isSelected() {
    return this.selected;
  }

  constructor() { }

  ngOnInit() {
  }

  private formValid() {
    return (this.forms && this.forms.length > 0) ? !this.forms.some(form => form.invalid) : true;
  }
}

import { Component, OnInit, Input, ViewEncapsulation, HostBinding, ContentChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'evb-wizard-step',
  templateUrl: './wizard-step.component.html',
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

  @ContentChild(NgForm) form: NgForm;

  @HostBinding('class.wizard-step--selected')
  get isSelected() {
    return this.selected;
  }

  constructor() { }

  ngOnInit() {
  }

  private formValid() {
    return (this.form) ? this.form.valid : true;
  }
}

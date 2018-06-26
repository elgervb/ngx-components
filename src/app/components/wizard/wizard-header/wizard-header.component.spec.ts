import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardHeaderComponent } from './wizard-header.component';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

describe('WizardHeaderComponent', () => {
  let component: WizardHeaderComponent;
  let fixture: ComponentFixture<WizardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardHeaderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a selection change', () => {
    let changeEmit: WizardStepComponent;
    component.selectionChange.subscribe((value: WizardStepComponent) => changeEmit = value);

    const step1 = new WizardStepComponent();
    const step2 = new WizardStepComponent();
    component.steps = [step1, step2];
    fixture.detectChanges();

    expect(step2.isSelected).toBe(false);
    component.setSelected(step2);
    fixture.detectChanges();

    expect(changeEmit).toBe(step2);
    expect(step2.isSelected).toBe(false);
  });
});

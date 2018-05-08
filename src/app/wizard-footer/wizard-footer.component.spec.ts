import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardFooterComponent } from './wizard-footer.component';
import { ButtonComponent } from '../button/button.component';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';

describe('WizardFooterComponent', () => {
  let component: WizardFooterComponent;
  let fixture: ComponentFixture<WizardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardFooterComponent, ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});

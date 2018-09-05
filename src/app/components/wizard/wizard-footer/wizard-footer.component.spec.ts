import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { WizardStepComponent } from '..';
import { ButtonModule } from '../../button';

import { WizardFooterComponent } from './wizard-footer.component';

describe('WizardFooterComponent', () => {
  let component: WizardFooterComponent;
  let fixture: ComponentFixture<WizardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardFooterComponent, WizardStepComponent],
      imports: [ButtonModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function createStep(props = {}) {
    const fixtureStep = TestBed.createComponent(WizardStepComponent);
    Object.assign(fixtureStep.componentInstance, props);
    return fixtureStep;
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render next button when there are no next steps', () => {
    expect(component.steps).toBeUndefined();

    const nextBtn = fixture.debugElement.query(By.css('.wizard__btn-next'));
    expect(nextBtn).toBeFalsy();
  });

  it('should emit on navigate next', () => {
    const step1 = createStep({ name: 'step1' });
    component.steps = [step1.componentInstance];
    fixture.detectChanges();

    let emitted = false;
    component.next.subscribe(() => emitted = true);

    const nextBtn1 = fixture.debugElement.query(By.css('.wizard__btn-next'));
    expect(nextBtn1).toBeDefined();
    nextBtn1.triggerEventHandler('click', undefined);

    expect(emitted).toBe(true);
  });

  it('should emit on navigate previous', () => {
    const step1 = createStep({ name: 'step1', visited: true, selected: false });
    const step2 = createStep({ name: 'step12', visited: true, selected: true });
    component.steps = [step1.componentInstance, step2.componentInstance];
    fixture.detectChanges();

    let emitted = false;
    component.previous.subscribe(() => emitted = true);

    const nextBtn1 = fixture.debugElement.query(By.css('.wizard__btn-previous'));
    expect(nextBtn1).toBeDefined();
    nextBtn1.triggerEventHandler('click', undefined);

    expect(emitted).toBe(true);
  });

  it('should emit when complete', () => {
    const step1 = createStep({ name: 'step1', visited: true, selected: true });
    component.steps = [step1.componentInstance];
    fixture.detectChanges();

    let emitted = false;
    component.complete.subscribe(() => emitted = true);

    const completeBtn = fixture.debugElement.query(By.css('.btn--wizard-complete'));
    expect(completeBtn).toBeDefined();

    completeBtn.triggerEventHandler('click', undefined);

    expect(emitted).toBe(true, 'Complete button did not emit');
  });
});

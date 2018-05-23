import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WizardFooterComponent } from './wizard-footer.component';
import { ButtonModule } from '../../button';

describe('WizardFooterComponent', () => {
  let component: WizardFooterComponent;
  let fixture: ComponentFixture<WizardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WizardFooterComponent],
      imports: [ButtonModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    debugger;
    fixture = TestBed.createComponent(WizardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    debugger;
    expect(component).toBeTruthy();
  });
});

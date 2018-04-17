import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to set the type', () => {
    component.type = 'mock-button';
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement;

    const type = el.querySelector('button').getAttribute('type');
    expect(type).toBe('mock-button');
  });

  it('should be possible to set css class', () => {
    component.class = 'btn-mock';
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement;

    const button: HTMLButtonElement = el.querySelector('button');
    expect(button).toBeDefined();
    expect(button.classList.contains('btn-mock')).toBe(true);
  });

  it('should be possible to set multiple css classes', () => {
    component.class = 'btn-mock btn-mock-2';
    fixture.detectChanges();

    const el = fixture.debugElement.nativeElement;

    const button: HTMLButtonElement = el.querySelector('button');
    expect(button).toBeDefined();
    expect(button.classList.contains('btn-mock')).toBe(true);
    expect(button.classList.contains('btn-mock-2')).toBe(true);
  });
});

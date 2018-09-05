import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveModal } from '../../services/active.modal';
import { ModalService } from '../../services/modal.service';
import { BackdropComponent } from '../backdrop/backdrop.component';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent, BackdropComponent],
      providers: [ModalService, ActiveModal]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

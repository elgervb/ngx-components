
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule } from '../../button';
import { ProgressbarModule } from '../../progressbar';

import { FilePickerComponent } from './file-picker.component';

describe('FilePickerComponent', () => {
  let component: FilePickerComponent;
  let fixture: ComponentFixture<FilePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FilePickerComponent,
      ],
      imports: [ProgressbarModule.forRoot(), ButtonModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

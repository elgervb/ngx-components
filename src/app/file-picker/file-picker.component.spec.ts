import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ButtonComponent } from '../button/button.component';
import { ProgressbarComponent } from '../progressbar/progressbar.component';
import { FilePickerComponent } from './file-picker.component';

describe('FilePickerComponent', () => {
  let component: FilePickerComponent;
  let fixture: ComponentFixture<FilePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
        FilePickerComponent,
        ProgressbarComponent,
      ]
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

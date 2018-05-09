import { FilePickerModule } from './file-picker.module';

describe('FilePickerModule', () => {
  let filePickerModule: FilePickerModule;

  beforeEach(() => {
    filePickerModule = new FilePickerModule();
  });

  it('should create an instance', () => {
    expect(filePickerModule).toBeTruthy();
  });
});

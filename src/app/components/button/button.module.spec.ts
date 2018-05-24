import { ButtonModule } from './button.module';

describe('ButtonModule', () => {
  let buttonModule: ButtonModule;

  beforeEach(() => {
    buttonModule = ButtonModule.forRoot();
  });

  it('should create an instance', () => {
    expect(buttonModule).toBeTruthy();
  });
});

import { FlyoutModule } from './flyout.module';

describe('FlyoutModule', () => {
  let flyoutModule: FlyoutModule;

  beforeEach(() => {
    flyoutModule = new FlyoutModule();
  });

  it('should create an instance', () => {
    expect(flyoutModule).toBeTruthy();
  });
});

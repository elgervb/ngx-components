import { hex2rgb } from './utils';

// tslint:disable no-magic-numbers
describe('utils', () => {

  it('converts long hex to rgb', () => {
    const hex = '#000000';
    const result = hex2rgb(hex);
    expect(result.r).toBe(0);
    expect(result.g).toBe(0);
    expect(result.b).toBe(0);
    expect(result.a).toBe(255, 'checking alpha');
  });

  it('converts short hex to rgb', () => {
    const hex = '#000';
    const result = hex2rgb(hex);
    expect(result.r).toBe(0);
    expect(result.g).toBe(0);
    expect(result.b).toBe(0);
    expect(result.a).toBe(255, 'checking alpha');
  });

});

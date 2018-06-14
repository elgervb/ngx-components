import { getColor, hex2rgb } from './utils';

// tslint:disable no-magic-numbers
describe('utils', () => {

  it('getColor: default color', () => {
    const ctx = createCanvas(100, 100);

    const color = getColor(ctx, 1, 1);

    expect(color.r).toBe(0);
    expect(color.g).toBe(0);
    expect(color.b).toBe(0);
    expect(color.a).toBe(0);
  });

  it('getColor: custom color', () => {
    const ctx = createCanvas(500, 500);
    ctx.fillStyle = 'rgb(127, 0, 55)';
    ctx.fillRect(0, 0, 500, 500);

    const color = getColor(ctx, 1, 1);

    expect(color.r).toBe(127, 'checking red');
    expect(color.g).toBe(0, 'checking green');
    expect(color.b).toBe(55, 'checking blue');
    expect(color.a).toBe(255, 'checking the alpha color');
  });

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

function createCanvas(height: number, width: number) {
  const canvas = document.createElement('canvas');
  canvas.height = height;
  canvas.width = width;

  document.body.appendChild(canvas);

  return canvas.getContext('2d');
}

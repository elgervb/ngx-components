import { Point, Rgb } from './models';

export function distanceBetween(point1: Point, point2: Point) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
export function angleBetween(point1: Point, point2: Point) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}
export function getColor(ctx: CanvasRenderingContext2D, x: number, y: number): Rgb {
  const imgData = ctx.getImageData(x, y, 1, 1);

  return {
    r: imgData.data[0],
    g: imgData.data[1],
    b: imgData.data[2],
    a: imgData.data[3]
  };
}
export function averageColor(rgb1: Rgb, rgb2: Rgb): Rgb {
  const half = .5;

  return {
    r: Math.round(half * rgb1.r + half * rgb2.r),
    g: Math.round(half * rgb1.g + half * rgb2.g),
    b: Math.round(half * rgb1.b + half * rgb2.b),
    a: Math.round(half * rgb1.a + half * rgb2.a)
  };
}
export function getMousePosition(evt: MouseEvent, el: Element): Point {
  const box = el.getBoundingClientRect();

  return { x: evt.clientX - box.left, y: evt.clientY - box.top };
}
export function rgb2string(rgb: Rgb) {
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a || 0})`;
}
export function hex2rgb(hex: string): Rgb {
  // long version
  let r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (r) {
    const rgbIndex = 4;
    const rgb = r.slice(1, rgbIndex)
      .map(x => parseInt(x, 16));

    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2],
      a: 255
    };
  }
  // short version
  r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (r) {
    // tslint:disable no-magic-numbers
    const rgb = r.slice(1, 4).map(x => parseInt(x, 16) * 0x11);
    return {
      r: rgb[0],
      g: rgb[1],
      b: rgb[2],
      a: 255
    };
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

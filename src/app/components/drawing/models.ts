export interface BrushContext {
  canvas: HTMLCanvasElement;
  lineWidth: number;
  color: string;
  // tslint:disable-next-line no-any
  data?: any;
}

export interface Point {
  x: number;
  y: number;
}

export enum BrushType {
  pen = 'pen',
  brush = 'brush',
  circular = 'circular'
}

export interface Rgb {
  r: number;
  g: number;
  b: number;
  a?: number;
}

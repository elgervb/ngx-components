export interface BrushContext {
  canvas: HTMLCanvasElement;
  lineWidth: number;
  color: string;
}

export interface Point {
  x: number;
  y: number;
}

export enum BrushType {
  pen = 'pen',
  brush = 'brush'
}

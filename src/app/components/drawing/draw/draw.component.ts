import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

import { Point, Pen, BrushType } from '../brushes';
import { Brush } from '../brushes/brush';
import { brushFactory } from '../brushes/brush.factory';

@Component({
  selector: 'evb-draw',
  template: `
    <canvas #canvas [width]="width" [height]="500"></canvas>
  `,
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit, OnChanges {

  @Input() width = 500;
  @Input() height = 500;
  @Input() lineWidth = 1;
  @Input() color = '#000';
  @Input() brushType: BrushType;

  @ViewChild('canvas') private canvasEl: ElementRef;
  private brush: Pen | Brush;

  private isDrawing = false;
  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    const canvas: HTMLCanvasElement = this.canvasEl.nativeElement;

    this.setBrush(this.brushType || BrushType.pen);

    this.ctx = canvas.getContext('2d');

    canvas.onmousedown = (evt: MouseEvent) => {

      this.isDrawing = true;

      this.brush.down(getMousePosition(evt, canvas));
    };

    canvas.onmousemove = (evt: MouseEvent) => {
      if (this.isDrawing) {
        this.brush.move(getMousePosition(evt, canvas));
      }
    };
    canvas.onmouseup = (evt: MouseEvent) => {
      this.isDrawing = false;
      this.brush.up(getMousePosition(evt, canvas));
    };
  }

  ngOnChanges() {
    if (this.brush) {
      this.brush.setContext(this.createContext());
    }
  }

  private createContext() {
    return {
      canvas: this.canvasEl.nativeElement,
      color: this.color,
      lineWidth: this.lineWidth
    };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height);
  }

  setBrush(type: BrushType) {
    this.brush = brushFactory(type, {
      canvas: this.canvasEl.nativeElement,
      color: this.color,
      lineWidth: this.lineWidth
    });
  }
}

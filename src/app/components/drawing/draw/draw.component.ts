import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { brushFactory, Brush } from '../brushes';
import { BrushType, BrushContext } from '../models';
import { getMousePosition } from '../utils';

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
  @Input() globalAlpha: number;
  @Input() brushType: BrushType;

  @ViewChild('canvas') private canvasEl: ElementRef;
  private brush: Brush;

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

  clear() {
    this.ctx.clearRect(0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height);
  }

  setBrush(type: BrushType) {
    this.brush = brushFactory(type, this.createContext());
  }

  private createContext(): BrushContext {
    return {
      canvas: this.canvasEl.nativeElement,
      color: this.color,
      lineWidth: +this.lineWidth,
      globalAlpha: +this.globalAlpha
    };
  }
}

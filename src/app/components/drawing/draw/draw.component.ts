import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';

import { Point } from '../brushes';
import { Brush } from '../brushes/brush';

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

  @ViewChild('canvas') private canvasEl: ElementRef;

  private isDrawing = false;
  private ctx: CanvasRenderingContext2D;
  private brush: Brush;

  constructor() { }

  ngOnInit() {
    const canvas: HTMLCanvasElement = this.canvasEl.nativeElement;
    this.brush = new Brush({
      canvas,
      color: this.color,
      lineWidth: this.lineWidth
    });

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
    this.brush.setContext(this.createContext());
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

}


function getMousePosition(evt: MouseEvent, el: Element): Point {
  const box = el.getBoundingClientRect();

  return { x: evt.clientX - box.left, y: evt.clientY - box.top };
}

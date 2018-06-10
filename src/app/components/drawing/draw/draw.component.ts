import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'evb-draw',
  template: `
    <canvas #canvas [width]="width" [height]="500"></canvas>
  `,
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  @Input() width = 500;
  @Input() height = 500;
  @Input() lineWidth = 1;
  @Input() color = '#000';

  @ViewChild('canvas') private canvasEl: ElementRef;

  private isDrawing = false;
  private ctx: CanvasRenderingContext2D;
  constructor() { }

  ngOnInit() {
    const canvas: HTMLCanvasElement = this.canvasEl.nativeElement;
    this.ctx = canvas.getContext('2d');

    canvas.onmousedown = (evt: MouseEvent) => {
      this.isDrawing = true;
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineJoin = this.ctx.lineCap = 'round';

      this.ctx.strokeStyle = this.color;

      this.ctx.beginPath();
      this.ctx.moveTo(evt.clientX, evt.clientY);
    };
    canvas.onmousemove = (evt: MouseEvent) => {
      if (this.isDrawing) {
        this.ctx.lineTo(evt.clientX, evt.clientY);
        this.ctx.stroke();
      }
    };
    canvas.onmouseup = () => {
      this.isDrawing = false;
      this.ctx.closePath();
    };
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvasEl.nativeElement.width, this.canvasEl.nativeElement.height);
  }

}

import { Point, BrushContext } from '../models';
import { distanceBetween, angleBetween } from '../utils';


export class Brush {

  private ctx: CanvasRenderingContext2D;
  private brushImg: HTMLImageElement;
  private lastPoint: Point;

  constructor(private context: BrushContext) {
    this.ctx = this.context.canvas.getContext('2d');
    this.setContext(context);

    this.brushImg = new Image();
    // tslint:disable-next-line max-line-length
    this.brushImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB50RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNS4xqx9I6wAAABR0RVh0Q3JlYXRpb24gVGltZQAxLzQvMTJldbXMAAACIklEQVRYhbWX227bMBBEj25pLk2KImj+/w+LvjRxJVN5ICeebKmqsmUBC11AkYezQy3VAPfADfAF6IEZGIE/wKFcH7nS0QEPJZ6AbwbUFZhUzvM1AHryzB+B7wWgBd6AX5wUUaRrANyQFXgGXoCBLP3Pcq2Z/yanY1eIvsQtOQU/gK/knD8ZgMe0J0QPNOR8C+K53D8WgGQxA697QvSh845swgeyEj1ZDW8jiF2M2ZPzeiidvpYBB+CObEgB6KyB38hKXATRkVeBvgP3ZeA7ckq0HBtOq2AqcWQHFTo++0D3g4WM2hrE0SCkytkATXg2l2etDT6UtoI47gXRlbNm5SGQjs9qOMQU2m+G8M+tS+szUzup4UokLoTo7NoBxhLu8gghY0blNqXDAVwJQUgNKeG+kHljOjYVry7ce9HR4AJRSXaIuESjh1YhIkCEcE9ECKVEEA4g1VbTUQOoQXg6IoSipsRqOpYAHCSa0yVegqiZsgqxBrAG4f0o4jv/hPgfAO/Qzen1oOWkRsvfSnhJPwtAELVaIAgMpA3gi9+ILQAO4W53JZYgFlOxFcAhavUgkeVXDWnsnZiO+VwAB4m+8DyrojaV9h9KXALgndbKsyAUVYhLAdTpUlHSsQSQ9gBwiFgPXAlv92HevQAihG9ikz13pUZg2hPAIbyiuuQ++AiM/c4AgtBGxlfJgbytazgVt3QNAEH4niCRf/cH8tJMBWh6B2crbJFfpZtGAAAAAElFTkSuQmCC';
  }

  setContext(context: BrushContext) {
    this.context = context;
  }

  up(position: Point) {
    //
  }

  down(from: Point) {
    this.ctx.lineWidth = this.context.lineWidth;
    this.ctx.lineJoin = this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = this.context.color;
    this.ctx.fillStyle = this.context.color;

    this.lastPoint = from;
  }

  move(to: Point) {
    const dist = distanceBetween(this.lastPoint, to);
    const angle = angleBetween(this.lastPoint, to);
    // tslint:disable-next-line no-magic-numbers
    // this.ctx.globalAlpha = 0.9;

    for (let i = 0; i < dist; i++) {
      const x = this.lastPoint.x + (Math.sin(angle) * i) - this.brushImg.width / 2;
      const y = this.lastPoint.y + (Math.cos(angle) * i) - this.brushImg.height / 2;
      this.ctx.drawImage(this.brushImg, x, y);
    }

    this.lastPoint = to;
  }
}


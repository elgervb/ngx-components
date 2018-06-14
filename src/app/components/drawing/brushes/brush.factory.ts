import { BrushType, BrushContext } from '../models';
import { Brush } from './brush';
import { Pen } from './pen';
import { CircularFill } from './circular-fill';

export function brushFactory(type: BrushType, context: BrushContext) {
  switch (type) {
    case BrushType.brush:
      return new Brush(context);
    case BrushType.pen:
      return new Pen(context);
    case BrushType.circular:
      return new CircularFill(context);
    default:
      throw new Error(`No such brush there ${type}`);
  }
}

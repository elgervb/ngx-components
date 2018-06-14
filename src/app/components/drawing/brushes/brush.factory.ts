import { BrushType, BrushContext } from '../models';
import { Marker } from './marker';
import { Pen } from './pen';
import { CircularLines } from './circular-lines';
import { Brush } from './brush';

export function brushFactory(type: BrushType, context: BrushContext): Brush {
  switch (type) {
    case BrushType.marker:
      return new Marker(context);
    case BrushType.pen:
      return new Pen(context);
    case BrushType.circular:
      return new CircularLines(context);
    default:
      throw new Error(`No such brush there ${type}`);
  }
}

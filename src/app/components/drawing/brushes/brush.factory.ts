import { BrushType, BrushContext } from '../models';
import { Marker } from './marker';
import { Pen } from './pen';
import { CircularLines } from './circular-lines';
import { Brush } from './brush';
import { SprayBrush } from './spray';
import { MultipleLines } from './multiple-lines';

export function brushFactory(type: BrushType, context: BrushContext): Brush {
  switch (type) {
    case BrushType.marker:
      return new Marker(context);
    case BrushType.pen:
      return new Pen(context);
    case BrushType.circular:
      return new CircularLines(context);
    case BrushType.spray:
      return new SprayBrush(context);
    case BrushType.multipleLines:
      return new MultipleLines(context);

    default:
      throw new Error(`No such brush there ${type}`);
  }
}

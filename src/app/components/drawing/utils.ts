import { Point } from './models';

export function distanceBetween(point1: Point, point2: Point) {
  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
}
export function angleBetween(point1: Point, point2: Point) {
  return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}

/** @flow */
import { curry, pathEq, filter } from 'ramda';


declare function F<A, B, C>(a: A, b: B, c: C): (a: A) => (b: B) => (c: C) => (d: (a: A, b: B) => boolean, c: C) => C;

const filterItemsByPath = curry((path: Array<string>, value: any, items: Array<*>): F<*, *, *> => {
  return filter(pathEq(path, value), items);
});

export { filterItemsByPath };

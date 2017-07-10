/** @flow */
import { curry, pathEq, filter } from 'ramda';


declare function F<A, B, C>(a: A, b: B, c: C): (a: A) => (b: B) => (c: C) => (d: (a: A, b: B) => boolean, c: C) => C;

const filterItemsByPath = curry((path: Array<string>, value: any, items: Array<*>): F<*, *, *> => {
  return filter(pathEq(path, value), items);
});

type ArgumentForUpdateStateSlice = {
  path: Array<string>,
  source: any,
  value: any,
  reverse?: boolean
};

const updateStateSlice = ({ path, source, value, reverse = false }: ArgumentForUpdateStateSlice) => {
  const segment = Array.isArray(path) ? path[0] : path;
  const newPath = Array.isArray(path) && path.length > 1 ? path.slice(1) : null;

  if (newPath !== null) {
    return Object.assign(
      Array.isArray(source)
      ? []
      : {},
      source, {
        [segment]: updateStateSlice({
          path: newPath,
          source: source[segment],
          value,
          reverse
        })
      }
    );
  }

  return Object.assign(
    Array.isArray(source)
    ? []
    : {},
    source, {
      [segment]: Array.isArray(source[segment])
      ? reverse ? [value, ...source[segment]] : [...source[segment], value]
      : { ...source[segment], ...value }
    }
  );
};

export {
  filterItemsByPath,
  updateStateSlice
};

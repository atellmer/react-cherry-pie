/** @flow */
import { curry, pathEq, filter } from 'ramda';


const filterItemsByPath = curry((path, value, items) => {
  return filter(pathEq(path, value), items);
});

export { filterItemsByPath };

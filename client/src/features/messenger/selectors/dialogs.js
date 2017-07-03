/** @flow */
import { createSelector } from 'reselect';


const getDialogs = state => state.messenger.dialogs.dialogItems;

const getTerm = state => state.messenger.dialogs.term;

const filterDialogs = (dialogs, term) => {
  return dialogs.filter(item => {
    const fullname = `${item.user.name.first} ${item.user.name.last}`;
    const regexp = new RegExp(`${term}`, 'ig');

    return regexp.test(fullname);
  });
};

const getFilteredDialogs = createSelector(
  getDialogs,
  getTerm,
  (dialogs, term) => filterDialogs(dialogs, term)
);

export {
  getFilteredDialogs
};

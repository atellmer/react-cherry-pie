/** @flow */
import { createSelector } from 'reselect';


const getDialogs = (state: any) => state.messenger.dialogs.dialogItems;

const getTerm = (state: any) => state.messenger.dialogs.term;

const filterDialogs = (dialogs: Array<*>, term: string) => {
  return dialogs.filter(item => {
    const fullname = `${item.user.name.first} ${item.user.name.last}`;
    const regexp = new RegExp(`${term}`, 'ig');

    return regexp.test(fullname);
  });
};

const getFilteredDialogs = createSelector(
  getDialogs,
  getTerm,
  (dialogs: Array<*>, term: string) => filterDialogs(dialogs, term)
);

export {
  getFilteredDialogs
};

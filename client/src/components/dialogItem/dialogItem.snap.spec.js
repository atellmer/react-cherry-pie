import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import muiTheme from '../../config/theme';
import TmDialogItem from './index';

const props = {
  interlocutor: {},
  changeInterlocutor: () => {},
  dialog: {
    user: {
      id: '12345',
      name: {
        first: 'Alex',
        last: 'Plex'
      },
      avatar: {
        thumbnail: 'path/to/avatar'
      },
      online: false
    },
    message: {
      value: {
        text: 'lorem ipsum'
      },
      status: {
        delivered: true,
        read: false,
        new: false
      },
      timestamp: new Date()
    }
  }
};

jest.mock('react-dom');

test('Jest: TmDialogItem (Snapshot)', () => {
  const component = renderer.create(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TmDialogItem {...props}/>
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

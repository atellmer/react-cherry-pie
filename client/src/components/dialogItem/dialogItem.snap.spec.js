import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

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

test('Jest: TmDialogItem (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmDialogItem {...props}/>);

  expect(tree).toMatchSnapshot();
});


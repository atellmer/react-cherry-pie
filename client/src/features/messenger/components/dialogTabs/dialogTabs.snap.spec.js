import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import DialogTabs from './index';


const props = {
  interlocutor: {},
  changeInterlocutor: () => {},
  dialogs: []
};

test('DialogTabs (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<DialogTabs {...props}/>);

  expect(tree).toMatchSnapshot();
});

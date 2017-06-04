import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmTabs from './index';


const props = {
  interlocutor: {},
  changeInterlocutor: () => {},
  dialogs: []
};

test('Jest: TmTabs (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmTabs {...props}/>);

  expect(tree).toMatchSnapshot();
});

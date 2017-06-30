import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import DialogDetailDesktop from './desktop';
import DialogDetailPhone from './phone';


const props = {
  messagePanelHeight: 0,
  changeMessagePanelHeight: () => {},
  match: {
    params: {
      id: 0
    }
  }
};

test('DialogDetailDesktop (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<DialogDetailDesktop {...props}/>);

  expect(tree).toMatchSnapshot();
});

test('DialogDetailPhone (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<DialogDetailPhone {...props}/>);

  expect(tree).toMatchSnapshot();
});

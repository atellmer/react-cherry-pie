import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import DialogPanelDesktop from './desktop';
import DialogPanelPhone from './phone';


const props = {
  dialogs: []
};

test('DialogPanelDesktop (Shallow Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<DialogPanelDesktop {...props}/>);

  expect(tree).toMatchSnapshot();
});

test('DialogPanelPhone (Shallow Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<DialogPanelPhone {...props}/>);

  expect(tree).toMatchSnapshot();
});


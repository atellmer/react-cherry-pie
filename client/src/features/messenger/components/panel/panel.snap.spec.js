import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmPanelDesktop from './desktop';
import TmPanelPhone from './phone';


const props = {
  dialogs: []
};

test('Jest: TmPanelDesktop (Shallow Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmPanelDesktop {...props}/>);

  expect(tree).toMatchSnapshot();
});

test('Jest: TmPanelPhone (Shallow Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmPanelPhone {...props}/>);

  expect(tree).toMatchSnapshot();
});


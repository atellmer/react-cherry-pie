import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmPanelDesktop from './index';


const props = {
  dialogs: []
};

test('Jest: TmPanelDesktop (Shallow Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmPanelDesktop {...props}/>);

  expect(tree).toMatchSnapshot();
});

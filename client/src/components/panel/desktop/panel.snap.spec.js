import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmPanelDesktop from './index';


const props = {
  dialogs: []
};

test('Jest: TmPanelDesktop (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();

  const result = shallowRenderer.render(<TmPanelDesktop {...props}/>);
  expect(result).toMatchSnapshot();
});

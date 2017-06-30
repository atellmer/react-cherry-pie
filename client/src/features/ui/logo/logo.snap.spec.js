import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Logo from './index';


test('Logo (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<Logo/>);

  expect(tree).toMatchSnapshot();
});

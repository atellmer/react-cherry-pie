import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmLogo from './index';


test('Jest: TmLogo (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmLogo/>);

  expect(tree).toMatchSnapshot();
});

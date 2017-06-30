import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Bagde from './index';


test('Bagde (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<Bagde count={5}/>);

  expect(tree).toMatchSnapshot();
});

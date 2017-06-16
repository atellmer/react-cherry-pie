import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmBagde from './index';


test('Jest: TmBagde (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmBagde count={5}/>);

  expect(tree).toMatchSnapshot();
});

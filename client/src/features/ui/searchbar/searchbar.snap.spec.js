import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmSearchbar from './index';


test('Jest: TmSearchbar (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmSearchbar/>);

  expect(tree).toMatchSnapshot();
});

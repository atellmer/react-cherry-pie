import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmTextarea from './index';

const props = {
  value: 'lorem ipsum',
  onChangeInput: (value) => {},
  onHeightChange: () => {}
};

test('Jest: TmTextarea (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmTextarea {...props}/>);

  expect(tree).toMatchSnapshot();
});

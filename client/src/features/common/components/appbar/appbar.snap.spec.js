import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import Appbar from './index';

const me = {
  id: '',
  name: {
    first: '',
    last: ''
  },
  avatar: {
    thumbnail: ''
  },
  online: false
};

test('Appbar (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<Appbar me={me}/>);

  expect(tree).toMatchSnapshot();
});

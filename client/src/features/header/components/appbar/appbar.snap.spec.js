import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmAppbar from './index';

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

test('Jest: TmAppbar (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmAppbar me={me}/>);

  expect(tree).toMatchSnapshot();
});

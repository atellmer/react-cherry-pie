import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmMessagePanel from './index';

const props = {
    changeMessagePanelHeight: () => {}
  };

test('Jest: TmMessagePanel (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmMessagePanel {...props}/>);

  expect(tree).toMatchSnapshot();
});

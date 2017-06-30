import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import DialogForm from './index';

const props = {
    changeMessagePanelHeight: () => {}
  };

test('DialogForm (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<DialogForm {...props}/>);

  expect(tree).toMatchSnapshot();
});

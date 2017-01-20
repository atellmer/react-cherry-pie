import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmCanvasDesktop from './index';


const props = {
  params: {},
  messagePanelHeight: 0,
  changeMessagePanelHeight: () => {}
};

test('Jest: TmCanvasDesktop (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();

  const result = shallowRenderer.render(<TmCanvasDesktop {...props}/>);
  expect(result).toMatchSnapshot();
});

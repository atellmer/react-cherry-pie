import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmCanvasPhone from './index';


const props = {
  params: {},
  messagePanelHeight: 0,
  changeMessagePanelHeight: () => {}
};

test('Jest: TmCanvasPhone (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();

  const result = shallowRenderer.render(<TmCanvasPhone {...props}/>);
  expect(result).toMatchSnapshot();
});

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmCanvasDesktop from './desktop';
import TmCanvasPhone from './phone';


const props = {
  messagePanelHeight: 0,
  changeMessagePanelHeight: () => {},
  match: {
    params: {
      id: 0
    }
  }
};

test('Jest: TmCanvasDesktop (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmCanvasDesktop {...props}/>);

  expect(tree).toMatchSnapshot();
});

test('Jest: TmCanvasPhone (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmCanvasPhone {...props}/>);

  expect(tree).toMatchSnapshot();
});
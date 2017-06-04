import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmPanelPhone from './index';


const props = {
  dialogs: []
};

test('Jest: TmPanelPhone (Shallow Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();
  const tree = shallowRenderer.render(<TmPanelPhone {...props}/>);

  expect(tree).toMatchSnapshot();
});

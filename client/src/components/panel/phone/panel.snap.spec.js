import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

import TmPanelPhone from './index';


const props = {
  dialogs: []
};

test('Jest: TmPanelPhone (Snapshot)', () => {
  const shallowRenderer = ReactTestUtils.createRenderer();

  const result = shallowRenderer.render(<TmPanelPhone {...props}/>);
  expect(result).toMatchSnapshot();
});

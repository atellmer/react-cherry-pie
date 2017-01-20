import React from 'react';
import renderer from 'react-test-renderer';

import TmLogo from './index';


jest.mock('react-dom');

test('Jest: TmLogo (Snapshot)', () => {
  const component = renderer.create(<TmLogo/>);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

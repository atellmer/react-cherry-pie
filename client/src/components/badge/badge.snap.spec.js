import React from 'react';
import renderer from 'react-test-renderer';

import TmBagde from './index';

jest.mock('react-dom');

test('Jest: TmBagde (Snapshot)', () => {
  const component = renderer.create(<TmBagde count={5}/>);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

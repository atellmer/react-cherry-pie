import React from 'react';
import renderer from 'react-test-renderer';

import TmTextarea from './index';


jest.mock('react-dom');
jest.mock('react-textarea-autosize', () => 'TextareaAutosize');

test('Jest: TmTextarea (Snapshot)', () => {
  const props = {
    value: 'lorem ipsum',
    onChangeInput: (value) => {},
    onHeightChange: () => {}
  };

  const component = renderer.create(<TmTextarea {...props}/>);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

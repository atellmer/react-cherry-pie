import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { windowMatchMedia } from '../../../test/__mocks__/matchMediaMock';
import muiTheme from '../../config/theme';
import TmAppbar from './index';

jest.mock('react-dom');
jest.mock('react/lib/ReactDefaultInjection');

const me = {
  id: '',
  name: {
    first: '',
    last: ''
  },
  avatar: {
    thumbnail: ''
  },
  online: false
};

beforeEach(() => {
  window.matchMedia = windowMatchMedia;
});

test('Jest: TmAppbar (Snapshot)', () => {
  const component = renderer.create(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TmAppbar me={me}/>
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

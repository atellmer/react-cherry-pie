import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import muiTheme from '../../config/theme';
import TmSearchbar from './index';

jest.mock('react-dom');

test('Jest: TmSearchbar (Snapshot)', () => {
  const component = renderer.create(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TmSearchbar/>
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

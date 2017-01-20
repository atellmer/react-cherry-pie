import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { windowMatchMedia } from '../../../test/__mocks__/matchMediaMock';
import muiTheme from '../../config/theme';
import TmMessagePanel from './index';


jest.mock('react-dom');
jest.mock('react-textarea-autosize', () => 'TextareaAutosize');

beforeEach(() => {
  window.matchMedia = windowMatchMedia;
});

test('Jest: TmMessagePanel (Snapshot)', () => {
  const props = {
    changeMessagePanelHeight: () => {}
  };

  const component = renderer.create(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TmMessagePanel {...props}/>
    </MuiThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

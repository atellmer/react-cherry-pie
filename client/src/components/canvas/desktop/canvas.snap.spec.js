import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { windowMatchMedia } from '../../../../test/__mocks__/matchMediaMock';
import muiTheme from '../../../config/theme';
import TmCanvasDesktop from './index';


jest.mock('react-dom');
jest.mock('react-custom-scrollbars', () => {
  return {
    Scrollbars: 'Scrollbars'
  };
});
jest.mock('react-textarea-autosize', () => 'TextareaAutosize');

beforeEach(() => {
  window.matchMedia = windowMatchMedia;
});

test('Jest: TmCanvasDesktop (Snapshot)', () => {
  const props = {
    params: {},
    messagePanelHeight: 0,
    changeMessagePanelHeight: () => {}
  };

  const component = renderer.create(
    <MuiThemeProvider muiTheme={muiTheme}>
      <TmCanvasDesktop {...props}/>
    </MuiThemeProvider>
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

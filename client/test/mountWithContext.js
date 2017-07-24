import { mount } from 'enzyme';
import PropTypes from 'prop-types';

import muiTheme from '../src/shared/config/theme';
import createRouterContext from 'react-router-test-context';


const mountWithContext = node => mount(
  node,
  {
    context: { muiTheme, ...createRouterContext() },
    childContextTypes: {
      muiTheme: PropTypes.object,
      router: PropTypes.object
    }
  }
);

export {
  mountWithContext
};

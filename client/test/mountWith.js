import React from 'react';
import PropTypes from 'prop-types';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MockedProvider } from 'react-apollo/test-utils';
import createRouterContext from 'react-router-test-context';

import muiTheme from '../src/shared/config/theme';
import configureStore from './__mocks__/redux/configureStoreMock';


const mountWithApolloAndContext = (Container, mock) => {
  return mount(
    <MockedProvider
      mocks={[ mock ]}>
      <Container />
    </MockedProvider>,
    {
      context: { muiTheme, ...createRouterContext() },
      childContextTypes: {
        muiTheme: PropTypes.object,
        router: PropTypes.object
      }
    }
  );
};

const mountWithReduxAndContext = (node, initialState = {}) => {
  const store = configureStore(initialState);

  return mount(
    <Provider
      store={store}>
      { node }
    </Provider>,
    {
      context: { muiTheme, ...createRouterContext() },
      childContextTypes: {
        muiTheme: PropTypes.object,
        router: PropTypes.object
      }
    }
  );
};

const mountWithContext = node => {
  return mount(
    <div>
      { node }
    </div>,
    {
      context: { muiTheme, ...createRouterContext() },
      childContextTypes: {
        muiTheme: PropTypes.object,
        router: PropTypes.object
      }
    }
  );
};

export {
  mountWithApolloAndContext,
  mountWithReduxAndContext,
  mountWithContext
};

import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { mountWithReduxAndContext } from 'test/mountWith';
import {
  MessengerView,
  mapDispatchToProps
} from './messenger';


describe('MessengerView Layout', () => {
  let props;

  beforeEach(() => {
    props = {
      fetchDialogs: jest.fn(),
      match: {
        url: 'path/to/somewhere'
      },
      location: {
        pathname: 'path/to/somewhere'
      }
    };
  });

  test('should render without crashing', () => {
    const component = shallow(
      <MessengerView {...props} />
    );

    expect(component).toBeTruthy();
  });

  test('should match to snapshot', () => {
    const component = shallow(
      <MessengerView {...props} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should pass props correctly', () => {
    const expectedProps = {
      match: {
        url: 'path/to/somewhere'
      },
      location: {
        pathname: 'path/to/somewhere'
      }
    };

    const component = shallow(
      <MessengerView {...expectedProps} />
    );

    expect(component.find('pure(Connect(Connect(WithPlatform)))').props()).toEqual(expectedProps);
  });

  test('should call function in componentDidMount', () => {
    const component = shallow(
      <MessengerView {...props}/>
    );

    component.instance().componentDidMount();

    expect(props.fetchDialogs).toHaveBeenCalled();
  });

  test('should return right trigger', () => {
    const component = shallow(<MessengerView />);

    component.setProps({ location: { pathname: 'im/' } });
    expect(component.instance().getActiveTrigger()).toBeTruthy();

    component.setProps({ location: { pathname: 'im/25' } });
    expect(component.instance().getActiveTrigger()).toBeTruthy();

    component.setProps({ location: { pathname: 'im' } });
    expect(component.instance().getActiveTrigger()).toBeFalsy();

    component.setProps({ location: { pathname: 'something/' } });
    expect(component.instance().getActiveTrigger()).toBeFalsy();
  });

  test('container should connect to redux correctly', () => {
    const expectedProps = {
      fetchDialogs: expect.any(Function)
    };

    class Container extends Component {
      render() {
        return null;
      }
    }

    const ContainerWithState = connect(null, mapDispatchToProps)(Container);
    const component = mountWithReduxAndContext(<ContainerWithState />);

    expect(component.find(Container).props()).toEqual(expectedProps);
  });
});

/* eslint-disable */
import React, { Component } from 'react';
import { shallow } from 'enzyme';
import { print } from 'graphql';
import { connect } from 'react-redux';
import { addTypenameToDocument } from 'apollo-client/queries/queryTransform';

import {
  mountWithApolloAndContext,
  mountWithReduxAndContext,
  mountWithContext
} from 'test/mountWith';
import {
  DialogDetail,
  channelsListQuery,
  withData,
  mapStateToProps,
  mapDispatchToProps,
} from './dialogDetail';


const query = addTypenameToDocument(channelsListQuery);
const data = {
  channels: [
    {
      __typename: 'Channel',
      id: 1,
      name: 'Soccer',
      messages: [
        {
          __typename: 'Message',
          id: 1,
          text: 'Hello world'
        }
      ]
    }
  ]
};

describe('DialogDetail Container', () => {
  let props;

  beforeEach(() => {
    props = {
      data: {
        subscribeToMore: jest.fn()
      },
      isPhone: false,
      isTablet: false,
      isDesktop: false,
      widthWindow: 0,
      dialogFormHeight: 0,
      resizeDialogForm: jest.fn(),
    };
  });

  test('should render phone version of component', () => {
    const component = shallow(
      <DialogDetail
        {...props}
        isPhone={true} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should render tablet version of component', () => {
    const component = shallow(
      <DialogDetail
        {...props}
        isTablet={true} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should render desktop and phone version of component', () => {
    const component = shallow(
      <DialogDetail
        {...props}
        isDesktop={true}
        widthWindow={480} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should render only desktop version of component', () => {
    const component = shallow(
      <DialogDetail
        {...props}
        isDesktop={true}
        widthWindow={1920} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should pass props correctly', () => {
    let component;
    const expectedProps = {
      data: {
        subscribeToMore: jest.fn()
      },
      dialogFormHeight: 0,
      resizeDialogForm: jest.fn(),
      match: {}
    };
    component = shallow(
      <DialogDetail
        {...props}
        {...expectedProps}
        isPhone={true} />
    );
    expect(component.find('pure(DialogDetailPhone)').props()).toEqual(expectedProps);

    component = shallow(
      <DialogDetail
        {...props}
        {...expectedProps}
        isTablet={true} />
    );
    expect(component.find('pure(DialogDetailDesktop)').props()).toEqual(expectedProps);

    component = shallow(
      <DialogDetail
        {...props}
        {...expectedProps}
        isDesktop={true}
        widthWindow={480} />
    );
    expect(component.find('pure(DialogDetailPhone)').props()).toEqual(expectedProps);

    component = shallow(
      <DialogDetail
        {...props}
        {...expectedProps}
        isDesktop={true}
        widthWindow={1920} />
    );
    expect(component.find('pure(DialogDetailDesktop)').props()).toEqual(expectedProps);
  });

  test('query should match expected shape', () => {
    expect(print(channelsListQuery)).toMatchSnapshot();
  });

  test('container should renders with loading first', done => {
    class Container extends Component {
      componentWillMount() {
        expect(this.props.data.loading).toBe(true);
        expect(this.props.data.channels).toBeFalsy();
        done();
      }
      render() {
        return null;
      }
    }

    const ContainerWithData = withData(Container);
    const component = mountWithApolloAndContext(
      ContainerWithData,
      { request: { query }, result: { data } }
    );
  });

   test('container should renders with data', done => {
    class Container extends Component {
      componentWillReceiveProps(props) {
        expect(props.data.loading).toBe(false);
        expect(props.data.channels).toEqual(data.channels);
        done();
      }
      render() {
        return null;
      }
    }

    const ContainerWithData = withData(Container);
    const component = mountWithApolloAndContext(
      ContainerWithData,
      { request: { query }, result: { data } }
    );
  });

  test('container should renders with an error correctly', done => {
    try {
      class Container extends Component {
        componentWillReceiveProps(props) {
          expect(props.data.error).toBeTruthy();
          done();
        }
        render() {
          return null;
        }
      }

      const ContainerWithData = withData(Container);
      const component = mountWithApolloAndContext(
        ContainerWithData,
        { request: { query }, error: new Error('fail') }
      );
    } catch (e) {
      console.log(e);
    }
  });

  test('should connect to redux correctly', () => {
    const subscribeToMore = jest.fn();
    const expectedProps = {
      data: { subscribeToMore },
      dialogFormHeight: 0,
      resizeDialogForm: expect.any(Function),
    };
    const DialogDetailWithState = connect(mapStateToProps, mapDispatchToProps)(DialogDetail);

    const component = mountWithReduxAndContext(
      <DialogDetailWithState
        data={{ subscribeToMore }} />
    );

    expect(component.find(DialogDetail).props()).toEqual(expectedProps);
  });
});

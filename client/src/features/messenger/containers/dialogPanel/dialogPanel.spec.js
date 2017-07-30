import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

import { mountWithReduxAndContext } from 'test/mountWith';
import {
  DialogPanel,
  mapStateToProps,
  mapDispatchToProps
} from './dialogPanel';


describe('DialogPanel Container', () => {
  let props;

  beforeEach(() => {
    props = {
      isPhone: false,
      isTablet: false,
      isDesktop: false,
      widthWindow: 0,
      dialogItems: [],
      filterDialogs: jest.fn(),
      match: {},
      location: {}
    };
  });

  test('should render phone version of component', () => {
    const component = shallow(
      <DialogPanel
        {...props}
        isPhone='true' />
    );

    expect(component).toMatchSnapshot();
  });

  test('should render tablet(desktop) version of component', () => {
    const component = shallow(
      <DialogPanel
        {...props}
        isTablet='true' />
    );

    expect(component).toMatchSnapshot();
  });

  test('should render desktop and phone version of component', () => {
    let component;

    component = shallow(
      <DialogPanel
        {...props}
        isDesktop='true'
        widthWindow={1920} />
    );
    expect(component).toMatchSnapshot();

    component = shallow(
      <DialogPanel
        {...props}
        isDesktop='true'
        widthWindow={480} />
    );

    expect(component).toMatchSnapshot();
  });

  test('should pass props correctly', () => {
    let component;
    const expectedProps = {
      dialogItems: [],
      filterDialogs: jest.fn(),
      match: {},
      location: {}
    };

    component = shallow(
      <DialogPanel
        {...props}
        {...expectedProps}
        isPhone='true' />
    );
    expect(component.find('pure(DialogPanelPhone)').props()).toEqual(expectedProps);

    component = shallow(
      <DialogPanel
        {...props}
        {...expectedProps}
        isTablet='true' />
    );
    expect(component.find('pure(DialogPanelDesktop)').props()).toEqual(expectedProps);

    component = shallow(
      <DialogPanel
        {...props}
        {...expectedProps}
        isDesktop='true'
        widthWindow={480} />
    );
    expect(component.find('pure(DialogPanelPhone)').props()).toEqual(expectedProps);

    component = shallow(
      <DialogPanel
        {...props}
        {...expectedProps}
        isDesktop='true'
        widthWindow={1920} />
    );
    expect(component.find('pure(DialogPanelDesktop)').props()).toEqual(expectedProps);
  });

  test('should connect to redux correctly', () => {
    const expectedProps = {
      dialogItems: [],
      filterDialogs: expect.any(Function)
    };
    const DialogPanelWithState = connect(mapStateToProps, mapDispatchToProps)(DialogPanel);

    const component = mountWithReduxAndContext(
      <DialogPanelWithState />
    );

    expect(component.find(DialogPanel).props()).toEqual(expectedProps);
  });
});

import React from 'react';
import { shallow } from 'enzyme';

import { TextInput } from './textInput';


describe('TextInput component', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'login',
      title: 'login',
      type: 'text',
      getValue: jest.fn(),
      setValue: jest.fn(),
      getErrorMessage: jest.fn()
    };
  });

  test('should match to snapshot', () => {
    const component = shallow(<TextInput {...props} />);

    expect(component).toMatchSnapshot();
  });

  test('should call setValue with argument', () => {
    const component = shallow(<TextInput {...props} />);

    component.find('TextField').simulate('change', { target: { value: 'Hello world' } });
    expect(component.instance().props.setValue).toHaveBeenCalledWith('Hello world');
  });

  test('should change type correctly', () => {
    const component = shallow(<TextInput {...props} />);

    component.setProps({ type: 'email' });

    expect(component.find('TextField').node.props.type).toBe('email');
  });
});

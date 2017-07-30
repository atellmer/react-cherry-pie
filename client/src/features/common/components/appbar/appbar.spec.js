import React from 'react';
import { shallow } from 'enzyme';
import Avatar from 'material-ui/Avatar/index';

import { Appbar } from './appbar';
import AppbarMenu from '../appbarMenu';


describe('Appbar Component', () => {
  let props;

  beforeEach(() => {
    props = {
      me: {
        avatar: {
          thumbnail: 'path'
        }
      },
      user: {},
      signout: jest.fn()
    };
  });

  test('should render component', () => {
    const component = shallow(<Appbar {...props}/>);

    expect(component).toMatchSnapshot();
  });

  test('should render component without controls', () => {
    const component =  shallow(
      <Appbar
        me={props.me}
        signout={props.signout}/>
    );

    expect(component).toMatchSnapshot();
  });

  test('should render avatar', () => {
    const component = shallow(<Appbar {...props}/>);
    const avatar = component.find(Avatar);

    expect(component.instance().props.me.avatar.thumbnail).toEqual('path');
    expect(avatar.props().src).toEqual('path');
  });

  test('pass callback to appbarMenu', () => {
    const component = shallow(<Appbar {...props}/>);
    const appbarMenu = component.find(AppbarMenu);

    expect(appbarMenu.props().signout).toEqual(props.signout);
  });
});

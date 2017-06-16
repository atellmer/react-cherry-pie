import React from 'react';
import { shallow } from 'enzyme';
import TmAppbar from './index';

const me = {
  id: '',
  name: {
    first: '',
    last: ''
  },
  avatar: {
    thumbnail: ''
  },
  online: false
};

describe('Enzyme: TmAbbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TmAppbar me={me}/>);
  });

  it('TmAbbar renders TmLogo', () => {
    expect(component.find('TmLogo').length).toEqual(1);
  });

  it('TmAbbar renders Avatar', () => {
    expect(component.find('Avatar').length).toEqual(1);
  });

  it('TmAbbar renders IconButton', () => {
    expect(component.find('IconButton').length).toEqual(1);
  });
});

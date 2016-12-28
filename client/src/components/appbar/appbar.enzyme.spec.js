import React from 'react';
import { shallow } from 'enzyme';
import TmAppbar from './index';


describe('Enzyme: TmAbbar', () => {
  let component;

  beforeEach(() => {
    component = shallow(<TmAppbar/>);
  });

  it('TmAbbar renders TmLogo', () => {
    expect(component.find('TmLogo').length).toEqual(1);
  });

  it('TmAbbar renders Flex', () => {
    expect(component.find('Flex').length).toEqual(1);
  });

  it('TmAbbar renders Box', () => {
    expect(component.find('Box').length).toEqual(2);
  });

  it('TmAbbar renders Avatar', () => {
    expect(component.find('Avatar').length).toEqual(1);
  });

  it('TmAbbar renders IconButton', () => {
    expect(component.find('IconButton').length).toEqual(1);
  });
});

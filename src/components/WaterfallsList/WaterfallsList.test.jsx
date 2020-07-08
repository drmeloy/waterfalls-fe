import React from 'react';
import { shallow } from 'enzyme';
import WaterfallsList from './WaterfallsList';

describe('WaterfallsList component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<WaterfallsList />);
    expect(wrapper).toMatchSnapshot();
  });
});

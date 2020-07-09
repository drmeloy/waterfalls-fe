import React from 'react';
import { shallow } from 'enzyme';
import LeafletMap from './LeafletMap';

describe('LeafletMap component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<LeafletMap waterfalls={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});

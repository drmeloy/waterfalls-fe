import React from 'react';
import { shallow } from 'enzyme';
import WaterfallCreateUpdate from './WaterfallCreateUpdate';

describe('WaterfallCreateUpdate component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<WaterfallCreateUpdate match={ { match: { params: 1 } } }/>);
    expect(wrapper).toMatchSnapshot();
  });
});

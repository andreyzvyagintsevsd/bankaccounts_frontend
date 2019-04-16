
import React from 'react';
import { shallow } from 'enzyme';
import ItemsListContainer from './ItemsListContainer';
import ItemsList from './ItemsList';

describe('ItemsListContainer', ()=> {
  let wrapper;
  beforeEach(() => wrapper = shallow(<ItemsListContainer />));

  it('should contain list component', () => {
    expect(wrapper.containsMatchingElement(<ItemsList items={[]} />)).toEqual(true);
  });
});
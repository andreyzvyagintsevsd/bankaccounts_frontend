
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ItemsList from '../components/list/ItemsList';
import { ItemsListHeader } from '../components/list/ItemsListHeader';

describe('ItemsList', ()=> {
  let wrapper;
  let items = [{
    accountHolder: "Ivanov",
    employee: "Petrov",
    bank: "Bank",
    branch: "AAA",
    type: "Credit",
    accountNumber: "UA1231452",
    employeeNumber: "MRT1233",
    lastUpdate: "2019-04-12 15:05:00Z"
  }];

  beforeEach(() => wrapper = shallow(<ItemsList items={items} />));

  // it('should contain Table component', () => {
  //   wrapper.setProps({ items: items });
  //   expect(wrapper.containsMatchingElement(<ItemsListHeader />)).toEqual(true);
  // });

  // it('shoud contain a table', () => {
  //   expect(wrapper.find('tbody').length).toEqual(1);
  // });

  it('shoud contain a ItemsListHeader', () => {
    let wr = mount(<ItemsList items={items} />);
    expect(wr.find("div").length).toEqual(1);
  });

  // it('should contain ItemsListHeader component', () => {
  //   wrapper.setProps({ items: items });
  //   expect(wrapper.containsMatchingElement(<ItemsListHeader
  //                                             filter={ (min: string, max: string) => undefined }
  //                                             create={ () => undefined } />))
  //                                             .toEqual(true);
  // });

});
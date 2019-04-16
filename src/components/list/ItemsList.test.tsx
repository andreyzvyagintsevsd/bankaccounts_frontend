
import React from 'react';
import { shallow } from 'enzyme';
import { Table } from 'react-bootstrap';
import ItemsList from './ItemsList';

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
  //   expect(wrapper.containsMatchingElement(<Table />)).toEqual(true);
  // });

  it('shoud contain a table', () => {
    expect(wrapper.find('tbody').length).toEqual(1);
  });

  it("shoud contain a table", () => {
    const rendered = render(<ItemsList items={items} />);
    expect(rendered.text()).to.contain("Petrov");
  });
});
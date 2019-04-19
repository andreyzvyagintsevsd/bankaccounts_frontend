
import React from 'react';
import { shallow, render, mount, ShallowWrapper } from 'enzyme';
import ItemsList from '../components/list/ItemsList';
import { ItemsListHeader } from '../components/list/ItemsListHeader';

describe('ItemsList', ()=> {
  let wrapper: any;
  let items = [{
    id: 1,
    accountHolderName: "Ivanov",
    employeeName: "Petrov",
    bankName: "Bank",
    branchName: "AAA",
    accountType: "Credit",
    accountNumber: "UA1231452",
    employeeNumber: "MRT1233",
    lastUpdate: "2019-04-12 15:05:00Z"
  }];

  beforeEach(() => wrapper = shallow(<ItemsList itemsList={items} />));

  it("shoud contain a div", () => {
    let wr = shallow(<ItemsList itemsList={items} />);
    expect(wr.find("div").length).toEqual(1);
  });

  it("shoud contain a ItemsListHeader", () => {
    // let createFn = jest.fn();
    // let filterFn = jest.fn();
    // let header = shallow(<ItemsListHeader create={createFn} filter={filterFn} />);
    expect(wrapper.find("ItemsListHeader").length).toEqual(1);
  });

  it("shoud contain a ItemsTable", () => {
    expect(wrapper.find("ItemsTable").length).toEqual(1);
  });

  it("shoud contain a Wizard", () => {
    expect(wrapper.find("Wizard").length).toEqual(1);
  });

  it("should return null for null itemList", () => {
    let emptyWrapper = render(<ItemsList itemsList={null} />);
    expect(emptyWrapper).toEqual(null);
  });

  it("shoud return null for null itemList", () => {
    let emptyWrapper = shallow(<ItemsList itemsList={null} branches={[]} banks={[]} />);
    expect(emptyWrapper).toEqual(null);
  });

  
});
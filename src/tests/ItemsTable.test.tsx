
import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import ItemsList from '../components/list/ItemsList';
import { ItemsTable } from '../components/list/Table';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const editAccountFn = jest.fn();
const deleteAccountFn = jest.fn();

describe('ItemsTable', ()=> {
  let wrapper: ShallowWrapper;
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

  beforeEach(() => wrapper = mount(<ItemsTable itemsList={items}
                                        editAccount={editAccountFn}
                                        deleteAccount={deleteAccountFn} />));

  it('shoud contain a BootstrapTable', () => {
    expect(wrapper.find(BootstrapTable).length).toEqual(1);
  });

  it('shoud contain a EditButton', () => {
    expect(wrapper.find("button#cellButton").length).toEqual(1);
  });

  it('shoud contain a DeleteButton', () => {
    expect(wrapper.find("button#deleteButton").length).toEqual(1);
  });

  it('should editButton work with proper values', () => {
    const editButton = wrapper.find("button#cellButton");

    editButton.simulate('click');
    expect(editAccountFn).lastCalledWith(items[0]);
  });

  it('should deleteButton work with proper values', () => {
    const deleteButton = wrapper.find("button#deleteButton");

    deleteButton.simulate('click');
    expect(deleteAccountFn).lastCalledWith(1);
  });

  it('should id column be presented', () => {
    const column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="id");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);
  });

  it('should all columns be presented', () => {
    let column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="accountHolderName");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);

    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="employeeName");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);

    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="bankName");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);

    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="branchName");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);

    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="accountType");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);

    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="accountNumber");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);

    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="employeeNumber");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);
    
    column = wrapper.findWhere((n: ReactWrapper) => n.prop("dataField")==="lastUpdate");
    expect(column.length).toEqual(1);
    expect(column.prop("dataSort")).toEqual(true);
  });


});
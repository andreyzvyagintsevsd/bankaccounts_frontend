
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

  const getAccountListFn = jest.fn();
  const updateAccountFn = jest.fn();
  const getBanksFn = jest.fn();

  beforeEach(() => wrapper = shallow(<ItemsList itemsList={items}
                                      getAccountList={getAccountListFn}
                                      updateAccount={updateAccountFn}
                                      getBanks={getBanksFn} />));

  let account = {
    id: 0,
    accountHolderName: "",
    employeeName: "",
    bankName: "",
    branchName: "",
    accountType: "",
    accountNumber: "",
    employeeNumber: "",
    lastUpdate: ""
  };

  it("should contain a div", () => {
    let wr = shallow(<ItemsList itemsList={items} />);
    expect(wr.find("div").length).toEqual(1);
  });

  it("should contain a ItemsListHeader", () => {
    // let createFn = jest.fn();
    // let filterFn = jest.fn();
    // let header = shallow(<ItemsListHeader create={createFn} filter={filterFn} />);
    expect(wrapper.find("ItemsListHeader").length).toEqual(1);
  });

  it("should contain a ItemsTable", () => {
    expect(wrapper.find("ItemsTable").length).toEqual(1);
  });

  it("should contain a Wizard", () => {
    expect(wrapper.find("Wizard").length).toEqual(1);
  });

  it("should return null for null itemList", () => {
    wrapper.find("ItemsListHeader").props().create();
    expect(wrapper.state().selectedItem).toEqual(account);
  });
    it("should ItemsListHeader call filter", () => {
      wrapper.find("ItemsListHeader").props().filter("0", "1");
      expect(getAccountListFn).toHaveBeenCalledWith("0", "1");
    });

    it("should ItemsTable call editAccount", () => {
      wrapper.setState({show: false});
      wrapper.find("ItemsTable").props().editAccount(account);
      expect(wrapper.state().show).toEqual(true);
    });

    it("should Wizard call updateAccountFn", () => {
      wrapper.setState({show: false});
      wrapper.find("Wizard").props().updateAccount(account);
      expect(updateAccountFn).toHaveBeenCalledWith(account);
    });

    it("should Wizard call onClose", () => {
      wrapper.setState({show: false});
      wrapper.find("Wizard").props().onClose();
      expect(wrapper.state().show).toEqual(false);
    });

    it("should Wizard call onBankSelected", () => {
      wrapper.setState({show: false});
      wrapper.find("Wizard").props().onBankSelected();
      expect(getBanksFn).toBeCalled();
    });
  // it("should return null for null itemList", () => {
  //   let emptyWrapper = shallow(<ItemsList itemsList={null} branches={[]} banks={[]} />);
  //   expect(emptyWrapper).toEqual(null);
  // });

  // it("should return null for null itemList", () => {
  //   let emptyWrapper = shallow(<ItemsList itemsList={null} branches={[]} banks={[]} />);
  //   expect(emptyWrapper).toEqual(null);
  // });

});
import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from '../components/wizard/Wizard';
import { shallow } from 'enzyme';
import ItemsListContainer from '../components/list/ItemsListContainer';
import { FirstStep } from '../components/wizard/FirstStep';

const bankSelectedFn = jest.fn();
const onCloseFn = jest.fn();
const updateAccountFn = jest.fn();

describe('Wizard', () => {
  let wrapper;
  let item;
  let banks = ["Bank", "Sber"];
  let branches = ["BranchA", "BranchB"];

  beforeEach(() => {
    wrapper = shallow(<Wizard item={item}
                                             banks={banks} branches={branches}
                                             isEditing={true} onBankSelected={bankSelectedFn}
                                             onClose={onCloseFn} updateAccount={updateAccountFn}
                                            show={true} />);
    item = {
      id: 1,
      accountHolderName: "Ivanov",
      employeeName: "Petrov",
      bankName: "Bank",
      branchName: "BranchA",
      accountType: "Credit",
      accountNumber: "UA1231452",
      employeeNumber: "MRT1233",
      lastUpdate: "2019-04-12 15:05:00Z"
    };
  });

  // it('should contain Modal component', () => {
  //   expect(wrapper.containsMatchingElement(<Modal />)).toEqual(true);
  // });

  it("should contain FirstStep and doesn't contain SecondStep component", () => {
    // isfirstStep = true;
    expect(wrapper.find("FirstStep").length).toEqual(1);
    expect(wrapper.find("SecondStep").length).toEqual(0);
  });

  it("should contain FirstStep and doesn't contain SecondStep component", () => {
    // isfirstStep = false;
    wrapper.setState({isfirstStep: false});
    expect(wrapper.find("FirstStep").length).toEqual(0);
    expect(wrapper.find("SecondStep").length).toEqual(1);
  });

  it("onBankSelect", () => {
    wrapper.instance().onBankSelect(null,  { target: { text: "OOO" } });
    let name = wrapper.state().item.bankName;
    expect(name).toEqual("OOO");
  });

  it("handleClose", () => {
    wrapper.instance().handleClose();
    expect(onCloseFn).toHaveBeenCalled();
  });

  it("handleNext", () => {
    expect(wrapper.state().isfirstStep).toEqual(true);
    wrapper.instance().handleNext();
    expect(wrapper.state().isfirstStep).toEqual(false);
  });

  it("handleBack", () => {
    wrapper.setState({isfirstStep: false});
    wrapper.instance().handleBack();
    expect(wrapper.state().isfirstStep).toEqual(true);
  });

  it("handleSave", () => {
    let itemChanged = {...item};
    itemChanged.bankName = "ooo";
    wrapper.setState({item: {...itemChanged}});
    wrapper.instance().handleSave();

    expect(onCloseFn).toHaveBeenCalled();
    expect(updateAccountFn).toHaveBeenCalledWith(itemChanged);
  });

  it("changeAccountName", () => {
    wrapper.instance().changeAccountName({target: { value: "new name"}});
    expect(wrapper.state().item.accountHolderName).toEqual("new name");
  });

  it("changeBranchName", () => {
    wrapper.instance().changeBranchName(null, {target: { text: "branch name"}});
    expect(wrapper.state().item.branchName).toEqual("branch name");
  });

  it("changeEmployeeName", () => {
    wrapper.instance().changeEmployeeName({target: { value: "employee name"}});
    expect(wrapper.state().item.employeeName).toEqual("employee name");
  });

  it("changeAccountNumber", () => {
    wrapper.instance().changeAccountNumber({target: { value: "321"}});
    expect(wrapper.state().item.accountNumber).toEqual("321");
  });

  it("changeType", () => {
    wrapper.instance().changeType({target: { value: "3215"}});
    expect(wrapper.state().item.accountType).toEqual("3215");
  });

  it("changeEmployeeNumber", () => {
    wrapper.instance().changeEmployeeNumber({target: { value: "1111"}});
    expect(wrapper.state().item.employeeNumber).toEqual("1111");
  });

  it("changeProperty", () => {
    wrapper.instance().changeProperty("id", "2222");
    expect(wrapper.state().item.id).toEqual("2222");
  });
});

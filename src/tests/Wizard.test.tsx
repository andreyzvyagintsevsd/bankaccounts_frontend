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
  let item = {
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
  let banks = ["Bank", "Sber"];
  let branches = ["BranchA", "BranchB"];

  beforeEach(() => wrapper = shallow(<Wizard item={item}
                                             banks={banks} branches={branches}
                                             isEditing={true} onBankSelected={bankSelectedFn}
                                             onClose={onCloseFn} updateAccount={updateAccountFn}
                                             show={true} />));

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
});

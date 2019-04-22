import React from 'react';
import ReactDOM from 'react-dom';
import Wizard from '../components/wizard/Wizard';
import {WizardView} from '../components/wizard/WizardView';
import { shallow, ReactWrapper, ShallowWrapper } from 'enzyme';
import ItemsListContainer from '../components/list/ItemsListContainer';
import { FirstStep } from '../components/wizard/FirstStep';

const bankSelectedFn = jest.fn();
const onCloseFn = jest.fn();
const updateAccountFn = jest.fn();

const changeAccountNameFn = jest.fn();
const changeAccountNumberFn = jest.fn();

const changeBranchNameFn = jest.fn();
const changeEmployeeNameFn = jest.fn();
const changeEmployeeNumberFn = jest.fn();
const changeTypeFn = jest.fn();
const handleBackFn = jest.fn();
const handleCloseFn = jest.fn();
const handleNextFn = jest.fn();
const handleSaveFn = jest.fn();
const onBankSelectFn = jest.fn();


describe('Wizard', () => {
  let wrapper: any;
  let wrapperWizard: any;
  let item;
  let banks = ["Bank", "Sber"];
  let branches = ["BranchA", "BranchB"];

  beforeEach(() => {
    wrapper = shallow(<WizardView item={item}
                          banks={banks}
                          branches={branches}
                          isEditing={true}
                          isfirstStep={true}
                          changeAccountName={changeAccountNameFn}
                          changeAccountNumber={changeAccountNumberFn}
                          changeBranchName={changeBranchNameFn}
                          changeEmployeeName={changeEmployeeNameFn}
                          changeEmployeeNumber={changeEmployeeNumberFn}
                          changeType={changeTypeFn}
                          handleBack={handleBackFn}
                          handleClose={handleCloseFn}
                          handleNext={handleNextFn}
                          handleSave={handleSaveFn}
                          onBankSelect={onBankSelectFn}
                                            show={true} />);

  wrapperWizard = shallow(<Wizard item={item}
    banks={banks} branches={[]}
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

  it("should contain Edit and doesn't contain Create component", () => {
    // isfirstStep = true;
    wrapper.setProps({isEditing: true});
    expect(wrapper.findWhere( n => n.prop("id") === "wizard.title.edit").length).toEqual(1);
    expect(wrapper.findWhere( n => n.prop("id") === "wizard.title.create").length).toEqual(0);
  });

  it("should contain Create and doesn't contain Edit component", () => {
    // isfirstStep = false;
    wrapper.setProps({isEditing: false});
    expect(wrapper.findWhere( n => n.prop("id") === "wizard.title.edit").length).toEqual(0);
    expect(wrapper.findWhere( n => n.prop("id") === "wizard.title.create").length).toEqual(1);
  });

  it("should contain FirstStep and doesn't contain SecondStep component", () => {
    // isfirstStep = true;
    wrapper.setProps({isEditing: true});
    expect(wrapper.find("FirstStep").length).toEqual(1);
    expect(wrapper.find("SecondStep").length).toEqual(0);
  });

  it("should contain FirstStep and doesn't contain SecondStep component", () => {
    // isfirstStep = false;
    wrapper.setProps({isfirstStep: false});
    expect(wrapper.find("FirstStep").length).toEqual(0);
    expect(wrapper.find("SecondStep").length).toEqual(1);
  });



  it("onBankSelect", () => {
    wrapperWizard.instance().onBankSelect(null,  { target: { text: "OOO" } });
    let name = wrapperWizard.state().item.bankName;
    expect(name).toEqual("OOO");
    expect(bankSelectedFn).toHaveBeenCalledWith("OOO")
  });


  it("changeProperty", () => {
    wrapperWizard.instance().changeProperty("accountHolderName", "Johnson");
    expect(wrapperWizard.state().item.accountHolderName).toEqual("Johnson");
  });

  // it("handleClose", () => {
  //   wrapper.instance().props.handleClose();
  //   expect(onCloseFn).toHaveBeenCalled();
  // });

  // it("handleNext", () => {
  //   expect(wrapper.state().isfirstStep).toEqual(true);
  //   wrapper.instance().props.handleNext();
  //   expect(wrapper.state().isfirstStep).toEqual(false);
  // });

  // it("handleBack", () => {
  //   wrapper.setState({isfirstStep: false});
  //   wrapper.instance().props.handleBack();
  //   expect(wrapper.state().isfirstStep).toEqual(true);
  // });

  it("handleSave", () => {
    let itemChanged = {...item};
    itemChanged.bankName = "ooo";
    wrapperWizard.setState({item: {...itemChanged}});
    wrapperWizard.instance().handleSave();

    expect(onCloseFn).toHaveBeenCalled();
    expect(updateAccountFn).toHaveBeenCalledWith(itemChanged);
  });

  // it("changeAccountName", () => {
  //   wrapper.instance().changeAccountName({target: { value: "new name"}});
  //   expect(wrapper.state().item.accountHolderName).toEqual("new name");
  // });

  // it("changeBranchName", () => {
  //   wrapper.instance().changeBranchName(null, {target: { text: "branch name"}});
  //   expect(wrapper.state().item.branchName).toEqual("branch name");
  // });

  // it("changeEmployeeName", () => {
  //   wrapper.instance().props.changeEmployeeName({target: { value: "employee name"}});
  //   expect(changeEmployeeNameFn).toHaveBeenCalledWith({target: { value: "employee name"}});
  // });

  // it("changeAccountNumber", () => {
  //   wrapper.instance().props.changeAccountNumber({target: { value: "321"}});
  //   expect(changeAccountNumberFn).toHaveBeenCalledWith({target: { value: "321"}});
  // });

  // it("changeType", () => {
  //   wrapper.instance().props.changeType({target: { value: "3215"}});
  //   expect(changeTypeFn).toHaveBeenCalledWith({target: { value: "3215"}});
  // });

  // it("changeEmployeeNumber", () => {
  //   wrapper.instance().props.changeEmployeeNumber({target: { value: "1111"}});
  //   expect(wrapper.state().item.employeeNumber).toEqual("1111");
  // });

  // it("changeProperty", () => {
  //   wrapper.instance().props.changeProperty("id", "2222");
  //   expect(wrapper.state().item.id).toEqual("2222");
  // });


  // it("should WizardView call handleBack", () => {
  //   wrapper.setState({isfirstStep: false});
  //   wrapper.find("WizardView").props().handleBack();
  //   expect(wrapper.state().show).toEqual(true);
  // });

  // it("should WizardView call changeEmployeeName", () => {
  //   wrapper.setState({isfirstStep: false});
  //   wrapper.find("WizardView").props().changeEmployeeName({target: { value: "aaaa"}});
  //   expect(wrapper.state().item!.employeeName).toEqual("aaaa");
  // });

  it("componentWillReceiveProps with new branches array (true)", () => {
    wrapperWizard.setProps({branches: ["aaa", "ooo"]});
    expect(wrapperWizard.state().item.branchName).toEqual("");
  });

  it("componentWillReceiveProps with old branches array (true)", () => {
    let wrapper = shallow(<Wizard item={item}
      banks={banks} branches={[]}
      isEditing={true} onBankSelected={bankSelectedFn}
      onClose={onCloseFn} updateAccount={updateAccountFn}
     show={true} />);
    expect(wrapper.state().isfirstStep).toEqual(true);
    wrapper.setState({isfirstStep: false});
    wrapper.setProps({branches: [], show: true});
    expect(wrapper.state().show).toEqual(true);
  });

  it("componentWillReceiveProps with null branches array (false)", () => {
    let wrapper = shallow(<Wizard item={item}
      banks={banks} branches={[]}
      isEditing={true} onBankSelected={bankSelectedFn}
      onClose={onCloseFn} updateAccount={updateAccountFn}
     show={true} />);
    expect(wrapper.state().isfirstStep).toEqual(true);
    wrapper.setState({isfirstStep: false});
    wrapper.setProps({branches: null, show: true});
    expect(wrapper.state().show).toEqual(true);
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { FirstStep } from "../components/wizard/FirstStep";
import { Account } from '../models/Account';


describe("FirstStep", () => {
  let wrapper: any;
  let item: Account

  beforeEach(() => {
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
    wrapper = shallow(<FirstStep
      banks={[]}
      item={item}
      branches={[]}
      changeAccountName={(event)=>undefined }
      changeBranchName={(event) => undefined}
      changeEmployeeName={(event) => undefined}
      onBankSelect={(event, e) => undefined} />);

  });

  it("should render a table", () => {
    expect(wrapper.find("table").length).toEqual(1);
  });

});

import React from 'react';
import { shallow } from 'enzyme';
import { FirstStep } from "../components/wizard/FirstStep";


describe("FirstStep", () => {
  let wrapper: any;

  beforeEach(() => wrapper = shallow(<FirstStep
                                        accountHolderName=""
                                        banks={[]}
                                        branches={[]}
                                        changeAccountName={(event)=>undefined }
                                        employeeName={""}
                                        bankName={""}
                                        branchName={""}
                                        changeBranchName={(event) => undefined}
                                        changeEmployeeName={(event) => undefined}
                                        onBankSelect={(event, e) => undefined} />));

  it("shoud render a table", () => {
    expect(wrapper.find("table").length).toEqual(1);
  });

});

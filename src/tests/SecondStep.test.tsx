import React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import { SecondStep } from "../components/wizard/SecondStep";


describe("SecondStep", () => {
  let wrapper: any;

  beforeEach(() => wrapper = shallow(<SecondStep
                                        accountNumber=""
                                        accountType=""
                                        changeType={(event)=>undefined }
                                        employeeNumber=""

                                        changeEmployeeNumber={(event)=>undefined }
                                        changeAccountNumber={(event)=>undefined }
                                   />));

  it("shoud render a table", () => {
    expect(wrapper.find("table").length).toEqual(1);
  });

});

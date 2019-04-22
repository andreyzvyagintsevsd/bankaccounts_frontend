import React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import { SecondStep } from "../components/wizard/SecondStep";
import { WizardFooter } from '../components/wizard/WizardFooter';

let handleBackFn = jest.fn();
let handleCloseFn = jest.fn();
let handleNextFn = jest.fn();
let handleSaveFn = jest.fn();

describe("WizardFooter", () => {
  let wrapper: any;

  beforeEach(() => wrapper = shallow(<WizardFooter
                                        handleBack={handleBackFn}
                                        handleClose={handleCloseFn}
                                        handleNext={handleNextFn}
                                        handleSave={handleSaveFn}
                                        isfirstStep={true}
                                   />));

  it("should render a Modal.Footer", () => {
    expect(wrapper.find("ModalFooter").length).toEqual(1);
  });

  it("should render a Close, not Back", () => {
    let close = wrapper.findWhere((n: ReactWrapper) => n.prop("defaultMessage")==="Close");
    expect(close.length).toEqual(1);

    let back = wrapper.findWhere((n: ReactWrapper) => n.prop("defaultMessage")==="Back");
    expect(back.length).toEqual(0);
  });

  it("should render a Back", () => {
    wrapper = shallow(<WizardFooter
          handleBack={handleBackFn}
          handleClose={handleCloseFn}
          handleNext={handleNextFn}
          handleSave={handleSaveFn}
          isfirstStep={false}
    />);

    let back = wrapper.findWhere((n: ReactWrapper) => n.prop("defaultMessage")==="Back");
    expect(back.length).toEqual(1);
  });
});

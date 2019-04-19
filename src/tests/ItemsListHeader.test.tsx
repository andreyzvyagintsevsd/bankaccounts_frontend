import React from 'react';
import {ItemsListHeader} from '../components/list/ItemsListHeader';
import { shallow, mount, ShallowWrapper } from 'enzyme';

const filterFn = jest.fn();
const createFn = jest.fn();

describe('ItemsListHeader', () => {
  let wrapper: any;
  beforeEach(() => wrapper = shallow(<ItemsListHeader filter={filterFn} create={createFn} />));

  it("shoud render a table", () => {
    expect(wrapper.find("table").length).toEqual(1);
  });

  it('should call filter function', () => {

    wrapper.find('button').simulate('click');

    expect(filterFn).toHaveBeenCalled();
  });

  it('should call create function', () => {

    wrapper.find('Button').simulate('click');

    expect(createFn).toHaveBeenCalled();
  });

  it('should filtering work with proper values', () => {
    const minInput = wrapper.find("#minInput");
    minInput.simulate("change", { target: { value: "23" } });
    expect(wrapper.state().min).toEqual("23");

    const maxInput = wrapper.find("#maxInput");
    maxInput.simulate("change", { target: { value: "100" } });
    expect(wrapper.state().max).toEqual("100");

    wrapper.find('button').simulate('click');
    expect(filterFn).lastCalledWith("23", "100");
  });

  it('should filtering work with single minInput', () => {
    const minInput = wrapper.find("#minInput");
    minInput.simulate("change", { target: { value: "23" } });
    expect(wrapper.state().min).toEqual("23");

    wrapper.find('button').simulate('click');
    expect(filterFn).lastCalledWith("23", "");
  });

  it('should filtering work with single minInput', () => {
    const maxInput = wrapper.find("#maxInput");
    maxInput.simulate("change", { target: { value: "100" } });
    expect(wrapper.state().max).toEqual("100");

    wrapper.find('button').simulate('click');
    expect(filterFn).lastCalledWith("", "100");
  });
});

import React from 'react';
import { shallow, mount, ShallowWrapper } from 'enzyme';
import { DropdownItemsList } from '../components/wizard/DropdownItemsList';

const onSelectFn = jest.fn();

describe("DropdownItemsList", () => {
  let wrapper: any;
  const items: string[] = ["option0", "option1", "option2"];

  beforeEach(() => wrapper = mount(<DropdownItemsList
                                        onSelect={onSelectFn}
                                        name={"option1"}
                                        items={items} />));

  it("shoud render a Dropdown", () => {
    expect(wrapper.find("Dropdown").length).toEqual(1);
  });

  it("should have active item", () => {

    wrapper.find("button.dropdown-toggle").first().simulate("click");
    expect(wrapper.find("a.active").length).toEqual(1);
  });

  it("should call onSelect function", () => {

    wrapper.find("button.dropdown-toggle").simulate("click");
    wrapper.find("a.dropdown-item").first().simulate("click");
    expect(onSelectFn).toBeCalled();
  });

  it("should be empty", () => {
    wrapper = mount(<DropdownItemsList
      onSelect={onSelectFn}
      name={"option1"}
      items={null} />);
    expect(wrapper.find("a.dropdown-item").length).toEqual(0);
  });
});

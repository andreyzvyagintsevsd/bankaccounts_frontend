import * as React from "react";
import { Dropdown } from "react-bootstrap";

interface DropdownItemsListProps {
  items?: string[];
  name: string;
  onSelect: (eventKey: any, e: any) => void;
}

export const DropdownItemsList: React.SFC<DropdownItemsListProps> = (props) => {
    const items = props.items ?
    props.items.map((item, index) => {
        if (item === props.name) {
          return <Dropdown.Item eventKey={index} key={item} active="true">{item}</Dropdown.Item>;
        }
        return <Dropdown.Item eventKey={index} key={item}>{item}</Dropdown.Item>;
      }) : [];
      return <Dropdown onSelect={props.onSelect}>
                <Dropdown.Toggle id="dropdown-custom-1">{props.name}</Dropdown.Toggle>
                <Dropdown.Menu className="super-colors">
                  {items}
                </Dropdown.Menu>
            </Dropdown>;
};

import { FormattedMessage } from "react-intl";
import * as React from "react";
import { Button } from "react-bootstrap";

interface ItemsListHeaderProps {
  create: () => void;
  filter: (min: string, max: string) => void;
}

export class ItemsListHeader extends React.Component<ItemsListHeaderProps> {
  max: React.RefObject<HTMLInputElement>;
  min: React.RefObject<HTMLInputElement>;
  constructor(props: ItemsListHeaderProps) {
    super(props);

    this.max = React.createRef();
    this.min = React.createRef();
  }

  render() {
    return <table>
    <tbody>
      <tr>
        <td><Button variant="primary" onClick={this.props.create}>
            <FormattedMessage id="list.buttons.create" defaultMessage="Create" />
          </Button>
        </td>
          <td><FormattedMessage id="list.filters.min" defaultMessage="Min account:" />
          </td>
          <td><input ref={this.min} className="form-control" type="number" style={{width: "200px"}}  />
          </td>
          <td><FormattedMessage id="list.filters.max" defaultMessage="Max account:" />
          </td>
          <td><input ref={this.max} className="form-control" style={{width: "200px", display: "inline"}} type="number"/>
          </td>
          <td>
         <button type="button"
            onClick={() => this.props.filter && this.props.filter(
              this.min.current ? this.min.current.value: "", this.max.current ? this.max.current.value: "") }>
         <FormattedMessage id="list.buttons.filter"
                           defaultMessage="Filter" /></button></td>
        </tr>
      </tbody>
    </table>;
  }
}
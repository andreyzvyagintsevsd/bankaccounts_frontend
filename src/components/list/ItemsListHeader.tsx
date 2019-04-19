import { FormattedMessage } from "react-intl";
import * as React from "react";
import { Button } from "react-bootstrap";

interface ItemsListHeaderProps {
  create: () => void;
  filter: (min: string, max: string) => void;
}

interface ItemsListHeaderState {
  min: string;
  max: string;
}

export class ItemsListHeader extends React.Component<ItemsListHeaderProps, ItemsListHeaderState> {
  constructor(props: ItemsListHeaderProps) {
    super(props);
    this.state = { min: "", max: ""};
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
          <td><input id="minInput" onChange={(e) => this.setState({min: e.target.value})}
                          className="form-control" type="number" style={{width: "200px"}}  />
          </td>
          <td><FormattedMessage id="list.filters.max" defaultMessage="Max account:" />
          </td>
          <td><input id="maxInput" onChange={(e) => this.setState({max: e.target.value})}
                          className="form-control" style={{width: "200px", display: "inline"}} type="number"/>
          </td>
          <td>
         <button type="button"
            onClick={() => this.props.filter && this.props.filter(this.state.min, this.state.max) }>
         <FormattedMessage id="list.buttons.filter"
                           defaultMessage="Filter" /></button></td>
        </tr>
      </tbody>
    </table>;
  }
}
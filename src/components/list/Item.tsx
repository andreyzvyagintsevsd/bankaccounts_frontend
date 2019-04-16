
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from "prop-types";

export interface ItemProps {
  index: number;
  accountHolder: string;
  employee: string;
  bank: string;
  branch: string;
  type: string;
  accountNumber: string;
  employeeNumber: string;
  lastUpdate: string;
}

interface ItemState {
}

class Item extends Component<ItemProps, ItemState> {
  render() {
    return <tr>
      <td>{this.props.index}</td>
      <td>{this.props.accountHolder}</td>
      <td>{this.props.employee}</td>
      <td>{this.props.bank}</td>
      <td>{this.props.branch}</td>
      <td>{this.props.type}</td>
      <td>{this.props.accountNumber}</td>
      <td>{this.props.employeeNumber}</td>
      <td>{this.props.lastUpdate}</td>
    </tr>;
  }
}

export default Item;
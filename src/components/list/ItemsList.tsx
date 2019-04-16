import React, { Component } from "react";
import { Account } from "../../models/Account";
import { Table, Button } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import Wizard from '../wizard/Wizard';

export interface ItemsListProps {
  ItemsList?: Account[];
  getAccountList?: (minAccount: string, maxAccount: string) => void;
  deleteAccount?: (accountId: number) => void;
  updateAccount?: (account: Account) => void;
}

interface ItemsListState {
  show: boolean;
  selectedItem: Account;
  minAccount: string;
  maxAccount: string;
}

function getDefaultItem() {
  return {
    id: 0,
    accountHolder: "",
    employee: "",
    bank: "",
    branch: "",
    type: "",
    accountNumber: "",
    employeeNumber: "",
    lastUpdate: ""
  };
}

export default class ItemsList extends Component<ItemsListProps, ItemsListState> {

  constructor(props: ItemsListProps) {
    super(props);

    this.state = {
      show: false,
      selectedItem: getDefaultItem(),
      minAccount: "",
      maxAccount: ""
    };

    this.updateAccount = this.updateAccount.bind(this);
    this.searchByHandleAccountMin = this.searchByHandleAccountMin.bind(this);
    this.searchByHandleAccountMax = this.searchByHandleAccountMax.bind(this);
    this.cellButton = this.cellButton.bind(this);
    this.deleteButton = this.deleteButton.bind(this);
  }

  public componentDidMount() {
    if (this.props.getAccountList) {
      this.props.getAccountList("", "");
    }
  }

  edit(item: Account) {
    this.setState({
      selectedItem: item,
      show: true
    });
  }

  delete(itemId: number) {
    if (this.props.deleteAccount) {
      this.props.deleteAccount(itemId);
    }
  }

  create() {
    this.setState({
      selectedItem: getDefaultItem(),
      show: true
    });
  }
  // searching can be done locally, using local state. But it's non-optimal approach
  // if there is a lot of data. In that case server filtering is more suitable
  searchByHandleAccountMin(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value && e.target.value.length > 2 && this.props.getAccountList) {
      this.setState({ minAccount: e.target.value });
      this.props.getAccountList(e.target.value, this.state.maxAccount);
    }
  }
  searchByHandleAccountMax(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value && e.target.value.length > 2 && this.props.getAccountList) {
      this.setState({ maxAccount: e.target.value });
      this.props.getAccountList(this.state.minAccount, e.target.value);
    }
  }

  updateAccount(item: Account) {
    if (this.props.updateAccount) {
      this.props.updateAccount(item);
    }
  }

  cellButton(cell: any, row: any, enumObject: any, rowIndex: number) {
    return (
       <button
          type="button"
          onClick={() => this.edit(row)}
       >Edit</button>
    );
 }

 deleteButton(cell: any, row: any, enumObject: any, rowIndex: number) {
  return (
     <button
        type="button"
        onClick={() => this.delete(row.id)}
     >Delete</button>
  );
}

  public render() {
    
  if (!this.props.ItemsList) {
    return null;
  }

  return <div>
    <table>
      <tbody>
        <tr>
          <td>
            <Button variant="primary" onClick={() => this.create()}>
                      Create
            </Button>
          </td>
            <td>
              <div>
                  <legend>Min account:</legend>
                  <input
                    className="form-control"
                    type="number"
                    style={{width: "200px"}}
                    onChange={this.searchByHandleAccountMin} />
                </div>
            </td>
            <td>
              <div>
                <legend>Max account:</legend>
                <input
                  className="form-control"
                  style={{width: "200px", display: "inline"}}
                  type="number"
                  onChange={this.searchByHandleAccountMax} />
              </div>
            </td>
          </tr>
        </tbody>
    </table>
    <BootstrapTable ref='table' data={ this.props.ItemsList } striped bordered hover>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>ID</TableHeaderColumn>
            <TableHeaderColumn dataField='accountHolder' dataSort={ true }>Account Holder's name</TableHeaderColumn>
            <TableHeaderColumn dataField='employee' dataSort={ true }>Employee</TableHeaderColumn>
            <TableHeaderColumn dataField='bank' dataSort={ true }>Bank Name</TableHeaderColumn>
            <TableHeaderColumn dataField='branch' dataSort={ true }>Branch Name</TableHeaderColumn>
            <TableHeaderColumn dataField='type' dataSort={ true }>Type</TableHeaderColumn>
            <TableHeaderColumn dataField='accountNumber' dataSort={ true }>Account Number</TableHeaderColumn>
            <TableHeaderColumn dataField='employeeNumber' dataSort={ true }>Emplyee Number</TableHeaderColumn>
            <TableHeaderColumn dataField='lastUpdate' dataSort={ true }>Last Update</TableHeaderColumn>
            <TableHeaderColumn
              dataField='button'
              dataFormat={this.cellButton}
            />
            <TableHeaderColumn
              dataField='button'
              dataFormat={this.deleteButton}
            />
    </BootstrapTable>

    <Wizard
      show={this.state.show}
      item={this.state.selectedItem}
      updateAccount={this.updateAccount}
       />
    </div>;
  }
}

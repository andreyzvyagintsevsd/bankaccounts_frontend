import React, { Component } from "react";
import { Account } from "../../models/Account";
import { Table, Button } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

import Wizard from "../wizard/Wizard";
import { FormattedMessage } from "react-intl";

export interface ItemsListProps {
  itemsList?: Account[];
  getAccountList?: (minAccount: string, maxAccount: string) => void;
  deleteAccount?: (accountId: number) => void;
  updateAccount?: (account: Account) => void;
  getBanks?: () => void;
  getBranches?: (bank: string) => void;
  branches?: string[];
  banks?: string[];
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
    accountHolderName: "",
    employeeName: "",
    bankName: "",
    branchName: "",
    accountType: "",
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
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onBankSelected = this.onBankSelected.bind(this);
  }

  public componentDidMount() {
    if (this.props.getAccountList) {
      this.props.getAccountList("", "");
    }
    if (this.props.getBanks) {
      this.props.getBanks();
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

  onCloseModal() {
    this.setState({ show: false });
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

  onBankSelected(name: string) {
    if (this.props.getBranches) {
      this.props.getBranches(name);
    }
  }

  cellButton(cell: any, row: any, enumObject: any, rowIndex: number) {
    return (
       <button
          type="button"
          onClick={() => this.edit(row)}
       >
       <FormattedMessage id="list.buttons.edit"
                         defaultMessage="Edit" /></button>
    );
 }

 deleteButton(cell: any, row: any, enumObject: any, rowIndex: number) {
  return (
     <button
        type="button"
        onClick={() => this.delete(row.id)}
     >
     <FormattedMessage id="list.buttons.delete"
                       defaultMessage="Delete" /></button>
  );
}

public render() {
  if (!this.props.itemsList) {
    return null;
  }

  return <div style={{margin: "40px 100px 40px 100px" }}>
    <table>
      <tbody>
        <tr>
          <td>
            <Button variant="primary" onClick={() => this.create()}>
              <FormattedMessage id="list.buttons.create"
                                defaultMessage="Create" />
            </Button>
          </td>
            <td>
              <div>
                  <legend>
                    <FormattedMessage id="list.filters.min"
                                defaultMessage="Min account:" />
                  </legend>
                  <input
                    className="form-control"
                    type="number"
                    style={{width: "200px"}}
                    onChange={this.searchByHandleAccountMin} />
                </div>
            </td>
            <td>
              <div>
                <legend>
                  <FormattedMessage id="list.filters.max"
                                defaultMessage="Max account:" />
                </legend>
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
    <BootstrapTable ref="table" data={ this.props.itemsList } striped bordered hover>
            <TableHeaderColumn dataField="id" isKey={ true } dataSort={ true }>
              <FormattedMessage id="list.table.id" defaultMessage="ID" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="accountHolderName" dataSort={ true }>
              <FormattedMessage id="list.table.accountHolder" defaultMessage="Account Holder's name" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="employeeName" dataSort={ true }>
              <FormattedMessage id="list.table.employee" defaultMessage="Employee" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="bankName" dataSort={ true }>
              <FormattedMessage id="list.table.bank" defaultMessage="Bank Name" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="branchName" dataSort={ true }>
              <FormattedMessage id="list.table.branch" defaultMessage="Branch Name" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="accountType" dataSort={ true }>
              <FormattedMessage id="list.table.type" defaultMessage="Type" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="accountNumber" dataSort={ true }>
              <FormattedMessage id="list.table.accountNumber" defaultMessage="Account Number" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="employeeNumber" dataSort={ true }>
              <FormattedMessage id="list.table.employeeNumber" defaultMessage="Employee Number" />
            </TableHeaderColumn>
            <TableHeaderColumn dataField="lastUpdate" dataSort={ true }>
              <FormattedMessage id="list.table.lastUpdate" defaultMessage="Last Update" />
            </TableHeaderColumn>
            <TableHeaderColumn
              dataField="button"
              dataFormat={this.cellButton}
            />
            <TableHeaderColumn
              dataField="button"
              dataFormat={this.deleteButton}
            />
    </BootstrapTable>

    <Wizard
      show={this.state.show}
      item={this.state.selectedItem}
      updateAccount={this.updateAccount}
      onClose={this.onCloseModal}
      isEditing={this.state.selectedItem && this.state.selectedItem.id > 0 }
      branches={this.props.branches}
      banks={this.props.banks}
      onBankSelected={this.onBankSelected}
       />
    </div>;
  }
}

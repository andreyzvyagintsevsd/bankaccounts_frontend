import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { FormattedMessage } from "react-intl";
import { Account } from "../../models/Account";
import { DeleteButton } from "./DeleteButton";

interface ItemsTableProps {
  itemsList?: Account[];
  cellButton: any;
  deleteAccount?: (id: number) => void;
}

export const ItemsTable: React.SFC<ItemsTableProps> = (props) => {
  return <BootstrapTable data={ props.itemsList? props.itemsList : [] } striped bordered hover>
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
            dataFormat={props.cellButton}
          />
          <DeleteButton deleteAccount={props.deleteAccount}/>
        </BootstrapTable>;
};
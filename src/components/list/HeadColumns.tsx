import * as React from 'react'
import { TableHeaderColumn } from 'react-bootstrap-table';
import { FormattedMessage } from 'react-intl';

export const HeadColumns: JSX.Element[] = [
          <TableHeaderColumn key={1} dataField="accountHolderName" dataSort={ true }>
            <FormattedMessage id="list.table.accountHolder" defaultMessage="Account Holder's name" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={2} dataField="employeeName" dataSort={ true }>
            <FormattedMessage id="list.table.employee" defaultMessage="Employee" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={3} dataField="bankName" dataSort={ true }>
            <FormattedMessage id="list.table.bank" defaultMessage="Bank Name" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={4} dataField="branchName" dataSort={ true }>
            <FormattedMessage id="list.table.branch" defaultMessage="Branch Name" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={5} dataField="accountType" dataSort={ true }>
            <FormattedMessage id="list.table.type" defaultMessage="Type" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={6} dataField="accountNumber" dataSort={ true }>
            <FormattedMessage id="list.table.accountNumber" defaultMessage="Account Number" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={7} dataField="employeeNumber" dataSort={ true }>
            <FormattedMessage id="list.table.employeeNumber" defaultMessage="Employee Number" />
          </TableHeaderColumn>,
          <TableHeaderColumn key={9} dataField="lastUpdate" dataSort={ true }>
            <FormattedMessage id="list.table.lastUpdate" defaultMessage="Last Update" />
          </TableHeaderColumn>];
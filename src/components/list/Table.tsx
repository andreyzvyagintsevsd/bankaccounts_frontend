import * as React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { FormattedMessage } from "react-intl";
import { Account } from "../../models/Account";
import { HeadColumns } from "./HeadColumns";

interface ItemsTableProps {
  itemsList?: Account[];
  editAccount: (row: Account) => void;
  deleteAccount?: (id: number) => void;
}

export class ItemsTable extends React.Component<ItemsTableProps> {
  constructor(props: ItemsTableProps){
    super(props);
  }

  deleteButton(cell: any, row: any, enumObject: any, rowIndex: number) {
    return <button type="button"
          onClick={() => this.props.deleteAccount && this.props.deleteAccount(row.id) } >
       <FormattedMessage id="list.buttons.delete"
                         defaultMessage="Delete" /></button>;
 }

 cellButton(cell: any, row: any, enumObject: any, rowIndex: number) {
  return <button type="button" onClick={() => this.props.editAccount(row)} >
      <FormattedMessage id="list.buttons.edit"
                       defaultMessage="Edit" /></button>;
 }

 render() {
    return <BootstrapTable data={ this.props.itemsList? this.props.itemsList : [] } striped bordered hover>
    <TableHeaderColumn dataField="id" isKey={ true } dataSort={ true }>
              <FormattedMessage id="list.table.id" defaultMessage="ID" />
            </TableHeaderColumn>
          {HeadColumns}
          <TableHeaderColumn dataField="button" dataFormat={this.cellButton.bind(this)} />
          <TableHeaderColumn dataField="button" dataFormat={this.deleteButton.bind(this)} />
        </BootstrapTable>;
  }
};
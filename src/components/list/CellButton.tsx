import { TableHeaderColumn } from "react-bootstrap-table";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Account } from "../../models/Account";

interface CellButtonProps {
   editAccount: (row: Account) => void;
}

export class CellButton extends React.Component<CellButtonProps> {
  cellButton(cell: any, row: any, enumObject: any, rowIndex: number) {
    return (
       <button
          type="button"
          onClick={() => this.props.editAccount(row)}
       >
       <FormattedMessage id="list.buttons.edit"
                         defaultMessage="Edit" /></button>
    );
 }

   render() {
      return <TableHeaderColumn
                  dataField="button"
                  dataFormat={this.cellButton}
                  />;
   }
}

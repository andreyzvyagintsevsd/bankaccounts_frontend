import { TableHeaderColumn } from "react-bootstrap-table";
import * as React from "react";
import { FormattedMessage } from "react-intl";

interface DeleteButtonProps {
   deleteAccount?: (id: number) => void;
}

export class DeleteButton extends React.Component<DeleteButtonProps> {
   deleteButton(cell: any, row: any, enumObject: any, rowIndex: number) {
      return (
         <button
            type="button"
            onClick={() => this.props.deleteAccount && this.props.deleteAccount(row.id) }
         >
         <FormattedMessage id="list.buttons.delete"
                           defaultMessage="Delete" /></button>
      );
   }

   render() {
      return <TableHeaderColumn
                  dataField="button"
                  dataFormat={this.deleteButton}
                  />;
   }
}

import { FormattedMessage } from "react-intl";
import * as React from "react";

interface SecondStepProps {
  accountNumber: string;
  changeAccountNumber: (e: any) => void;
  employeeNumber: string;
  changeEmployeeNumber: (e: any) => void;
  accountType: string;
  changeType: (e: any) => void;
}

export const SecondStep: React.SFC<SecondStepProps> = (props) => {
  return <table>
  <tbody>
    <tr>
      <td><FormattedMessage id="list.table.accountNumber" defaultMessage="Account Number" /></td>
      <td><input className="form-control" style={{width: "200px"}} value={props.accountNumber}
                onChange={props.changeAccountNumber} />
        </td>
        <td><FormattedMessage id="list.table.employeeNumber" defaultMessage="Employee Number" />
         </td>
         <td>
            <input className="form-control"
              style={{width: "200px"}}
              value={props.employeeNumber}
              onChange={props.changeEmployeeNumber} />
        </td>
      </tr>
    <tr>
        <td>
            <legend>
              <FormattedMessage id="list.table.type" defaultMessage="Type" />
            </legend>
         </td>
         <td>
            <input
              className="form-control"
              style={{width: "200px"}}
              value={props.accountType}
              onChange={props.changeType} />
        </td>
      </tr>
    </tbody>
</table>;
};
import { FormattedMessage } from "react-intl";
import * as React from "react";
import { Dropdown } from "react-bootstrap";

interface FirstStepProps {
  accountHolderName: string;
  banks:  JSX.Element[];
  branches:  JSX.Element[];
  changeAccountName: (event: any) => void;
  employeeName: string;
  changeEmployeeName: (event: any) => void;
  onBankSelect: (eventKey: any, event: any) => void;
  bankName: string;
  changeBranchName: (eventKey: any, event: any) => void;
  branchName: string;
}

export const FirstStep: React.SFC<FirstStepProps> = (props) => {
 return <table>
 <tbody>
   <tr>
     <td><FormattedMessage id="list.table.accountHolder" defaultMessage="Account Holder's name" /></td>
       <td><input className="form-control" style={{width: "200px"}} value={props.accountHolderName} onChange={props.changeAccountName} />
       </td>
       <td><FormattedMessage id="list.table.employee" defaultMessage="Employee" /></td>
        <td><input className="form-control" style={{width: "200px"}} value={props.employeeName} onChange={props.changeEmployeeName} />
       </td>
     </tr>
   <tr>
       <td><FormattedMessage id="list.table.bank" defaultMessage="Bank Name" /></td>
        <td><Dropdown onSelect={props.onBankSelect}>
              <Dropdown.Toggle id="dropdown-custom-1">{props.bankName}</Dropdown.Toggle>
              <Dropdown.Menu className="super-colors">
                {props.banks}
              </Dropdown.Menu>
          </Dropdown>
       </td>
     <td><FormattedMessage id="list.table.branch" defaultMessage="Branch Name" /></td>
       <td><Dropdown onSelect={props.changeBranchName}>
            <Dropdown.Toggle id="dropdown-custom-1">{props.branchName}</Dropdown.Toggle>
            <Dropdown.Menu className="super-colors">
              {props.branches}
            </Dropdown.Menu>
          </Dropdown>
       </td>
     </tr>
   </tbody>
</table>;
};
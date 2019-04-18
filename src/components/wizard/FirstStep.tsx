import { FormattedMessage } from "react-intl";
import * as React from "react";
import { Dropdown } from "react-bootstrap";
import { DropdownItemsList } from "./DropdownItemsList";

interface FirstStepProps {
  accountHolderName: string;
  banks?:  string[];
  branches?:  string[];
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
        <td><DropdownItemsList items={props.banks} name={props.bankName} onSelect={props.onBankSelect}/>
       </td>
     <td><FormattedMessage id="list.table.branch" defaultMessage="Branch Name" /></td>
       <td><DropdownItemsList items={props.branches} name={props.branchName} onSelect={props.changeBranchName}/>
       </td>
     </tr>
   </tbody>
</table>;
};
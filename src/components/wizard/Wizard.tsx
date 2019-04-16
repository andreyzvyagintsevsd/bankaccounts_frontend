import React, { Component } from 'react';
import { Account } from '../../models/Account';
import { Modal, Button } from 'react-bootstrap';

export interface WizardProps {
  item?: Account;
  updateAccount: Function;
  show: boolean;
}

interface WizardState {
  item?: Account;
  isfirstStep: boolean;
  show: boolean;
}

class Wizard extends Component<WizardProps, WizardState> {

  constructor(props: WizardProps) {
    super(props);
    this.state = {
      show: props.show,
      isfirstStep: true,
      item: {
        id: 0,
        accountHolder: "",
        employee: "",
        bank: "",
        branch: "",
        type: "",
        accountNumber: "",
        employeeNumber: "",
        lastUpdate: ""
      } as Account
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);

    this.changeAccountName = this.changeAccountName.bind(this);
    this.changeEmployeeName = this.changeEmployeeName.bind(this);
    this.changeBankName = this.changeBankName.bind(this);
    this.changeBranchName = this.changeBranchName.bind(this);

    this.changeType = this.changeType.bind(this);
    this.changeAccountNumber = this.changeAccountNumber.bind(this);
    this.changeEmployeeNumber = this.changeEmployeeNumber.bind(this);
  }

  componentWillReceiveProps(nextProps: WizardProps) {
    this.setState({
      show: nextProps.show,
      isfirstStep: true,
      item: nextProps.item
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleNext() {
    if (this.state.isfirstStep) {
      this.setState({ isfirstStep: false });
    }
  }
  handleBack() {
    if (!this.state.isfirstStep) {
      this.setState({ isfirstStep: true });
    }
  }

  handleSave() {
    const item = this.state.item;
    this.props.updateAccount(item);
  }

  handleShow() {
    this.setState({ show: true });
  }

  changeAccountName(e: React.ChangeEvent<HTMLInputElement>) {
    let item = { ...this.state.item } as Account;
    item.accountHolder = e.target.value as string;
    this.setState({ item });
  }

  changeBankName(e: any) {
    let item = { ...this.state.item } as Account;
    item.bank = e.target.value as string;
    this.setState({ item });
  }

  changeBranchName(e: any) {
    let item = { ...this.state.item } as Account;
    item.branch = e.target.value as string;
    this.setState({ item });
  }

  changeEmployeeName(e: any) {
    let item = { ...this.state.item } as Account;
    item.employee = e.target.value as string;
    this.setState({ item });
  }

  changeAccountNumber(e: any) {
    let item = { ...this.state.item } as Account;
    item.accountNumber = e.target.value as string;
    this.setState({ item });
  }

  changeType(e: any) {
    let item = { ...this.state.item } as Account;
    item.type = e.target.value as string;
    this.setState({ item });
  }

  changeEmployeeNumber(e: any) {
    let item = { ...this.state.item } as Account;
    item.employeeNumber = e.target.value as string;
    this.setState({ item });
  }

  render() {
    return <Modal
              show={this.state.show}
              onHide={this.handleClose}
              size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      { this.state.isfirstStep === true ?
       <table>
       <tbody>
         <tr>
           <td>
            <legend>Account Holder's name</legend>
           </td>
             <td>
                   <input
                     className="form-control"
                     style={{width: "200px"}}
                     value={this.state.item!.accountHolder}
                     onChange={this.changeAccountName} />
             </td>
             <td>
                 <legend>Employee name</legend>
              </td>
              <td>
                 <input
                   className="form-control"
                   style={{width: "200px"}}
                   value={this.state.item!.employee}
                   onChange={this.changeEmployeeName} />
             </td>
           </tr>
         <tr>
             <td>
                 <legend>Bank name</legend>
              </td>
              <td>
                 <input
                   className="form-control"
                   style={{width: "200px"}}
                   value={this.state.item!.bank}
                   onChange={this.changeBankName} />
             </td>
           <td>
            <legend>Branch name</legend>
           </td>
             <td>
                   <input
                     className="form-control"
                     style={{width: "200px"}}
                     value={this.state.item!.branch}
                     onChange={this.changeBranchName} />
             </td>
           </tr>
         </tbody>
     </table>
        :
        <table>
        <tbody>
          <tr>
            <td>
             <legend>Account Number</legend>
            </td>
              <td>
                    <input
                      className="form-control"
                      style={{width: "200px"}}
                      value={this.state.item!.accountNumber}
                      onChange={this.changeAccountNumber} />
              </td>
              <td>
                  <legend>Employee number</legend>
               </td>
               <td>
                  <input
                    className="form-control"
                    style={{width: "200px"}}
                    value={this.state.item!.employeeNumber}
                    onChange={this.changeEmployeeNumber} />
              </td>
            </tr>
          <tr>
              <td>
                  <legend>Type</legend>
               </td>
               <td>
                  <input
                    className="form-control"
                    style={{width: "200px"}}
                    value={this.state.item!.type}
                    onChange={this.changeType} />
              </td>
            </tr>
          </tbody>
      </table>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Close
        </Button>
        {
          this.state.isfirstStep === true ?
            <Button variant="primary" onClick={this.handleNext}>
              Next
            </Button>
          :
            <Button variant="primary" onClick={this.handleNext}>
              Save Changes
            </Button>
        }
      </Modal.Footer>
    </Modal>;
  }
}

export default Wizard;
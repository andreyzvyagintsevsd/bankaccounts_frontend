import React, { Component } from 'react';
import { Account } from '../../models/Account';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { WizardFooter } from './WizardFooter';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';

export interface WizardProps {
  item?: Account;
  updateAccount: Function;
  show: boolean;
  isEditing: boolean;
  onClose: Function;
  branches?: string[];
  banks?: string[];
  onBankSelected: (bank: string) => void;
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
        accountHolderName: "",
        employeeName: "",
        bankName: "",
        branchName: "",
        accountType: "",
        accountNumber: "",
        employeeNumber: "",
        lastUpdate: ""
      } as Account
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSave = this.handleSave.bind(this);

    this.changeAccountName = this.changeAccountName.bind(this);
    this.changeEmployeeName = this.changeEmployeeName.bind(this);
    this.changeBranchName = this.changeBranchName.bind(this);

    this.changeType = this.changeType.bind(this);
    this.changeAccountNumber = this.changeAccountNumber.bind(this);
    this.changeEmployeeNumber = this.changeEmployeeNumber.bind(this);

    this.onBankSelect = this.onBankSelect.bind(this);
  }

  componentWillReceiveProps(nextProps: WizardProps) {
    if (this.props.branches !== nextProps.branches) {
      let item = { ...this.state.item } as Account;
      item.branchName = "";
      this.setState({ item });
    } else {
      this.setState({
        show: nextProps.show,
        isfirstStep: true,
        item: nextProps.item
      });
    }
  }

  onBankSelect(eventKey: any, event: any) {
    this.changeProperty("bankName", event.target.text);
    this.props.onBankSelected(event.target.text);
  }

  handleClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
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
    this.handleClose();
  }

  changeAccountName(e: React.ChangeEvent<HTMLInputElement>) {
    this.changeProperty("accountHolderName", e.target.value);
  }

  changeBranchName(eventKey: any, event: any) {
    this.changeProperty("branchName", event.target.text);
  }

  changeEmployeeName(e:  React.ChangeEvent<HTMLInputElement>) {
    this.changeProperty("employeeName", e.target.value);
  }

  changeAccountNumber(e:  React.ChangeEvent<HTMLInputElement>) {
    this.changeProperty("accountNumber", e.target.value);
  }

  changeType(e:  React.ChangeEvent<HTMLInputElement>) {
    this.changeProperty("accountType", e.target.value);
  }

  changeEmployeeNumber(e:  React.ChangeEvent<HTMLInputElement>) {
    this.changeProperty("employeeNumber", e.target.value);
  }

  changeProperty(prop: string, value: string) {
    let item = { ...this.state.item } as any;
    item[prop] = value;
    let account = item as Account;
    this.setState({ item: account });
  }

  render() {
    return <Modal show={this.state.show} onHide={this.handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          { this.props.isEditing ?
            <FormattedMessage id="wizard.title.edit" defaultMessage="Edit" />
            : <FormattedMessage id="wizard.title.create" defaultMessage="Create" /> }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      { this.state.isfirstStep === true ?
        <FirstStep
          accountHolderName={this.state.item!.accountHolderName}
          changeAccountName={this.changeAccountName}
          employeeName={this.state.item!.employeeName}
          bankName={this.state.item!.bankName}
          banks={this.props.banks}
          branches={this.props.branches}
          changeEmployeeName={this.changeEmployeeName}
          onBankSelect={this.onBankSelect}
          branchName={this.state.item!.branchName}
          changeBranchName={this.changeBranchName} />
        : <SecondStep
            accountNumber={this.state.item!.accountNumber}
            changeAccountNumber={this.changeAccountNumber}
            employeeNumber={this.state.item!.employeeNumber}
            changeEmployeeNumber={this.changeEmployeeNumber}
            accountType={this.state.item!.accountType}
            changeType={this.changeType} /> }
      </Modal.Body>
      <WizardFooter
        isfirstStep={this.state.isfirstStep}
        handleClose={this.handleClose}
        handleBack={this.handleBack}
        handleNext={this.handleNext}
        handleSave={this.handleSave}
       />
    </Modal>;
  }
}

export default Wizard;
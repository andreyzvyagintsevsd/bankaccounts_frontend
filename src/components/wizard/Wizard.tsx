import React, { Component } from 'react';
import { Account } from '../../models/Account';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { WizardFooter } from './WizardFooter';
import { FirstStep } from './FirstStep';
import { SecondStep } from './SecondStep';
import { getBanks, getBranches } from '../../utils/helpers';

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
    let bank = event.target.text;
    let item = { ...this.state.item } as Account;
    item.bankName = bank;
    this.setState({ item });
    this.props.onBankSelected(bank);
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
    let item = { ...this.state.item } as Account;
    item.accountHolderName = e.target.value as string;
    this.setState({ item });
  }

  changeBranchName(eventKey: any, event: any) {
    let item = { ...this.state.item } as Account;
    item.branchName = event.target.text;
    this.setState({ item });
  }

  changeEmployeeName(e: any) {
    let item = { ...this.state.item } as Account;
    item.employeeName = e.target.value as string;
    this.setState({ item });
  }

  changeAccountNumber(e: any) {
    let item = { ...this.state.item } as Account;
    item.accountNumber = e.target.value as string;
    this.setState({ item });
  }

  changeType(e: any) {
    let item = { ...this.state.item } as Account;
    item.accountType = e.target.value as string;
    this.setState({ item });
  }

  changeEmployeeNumber(e: any) {
    let item = { ...this.state.item } as Account;
    item.employeeNumber = e.target.value as string;
    this.setState({ item });
  }

  render() {
    let banks = getBanks(this.props.banks, this.props.item!.bankName);
    let branches = getBranches(this.props.branches, this.props.item!.branchName);
    return <Modal
              show={this.state.show}
              onHide={this.handleClose}
              size="lg">
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
          banks={banks}
          branches={branches}
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
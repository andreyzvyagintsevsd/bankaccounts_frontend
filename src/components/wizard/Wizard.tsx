import React, { Component } from 'react';
import { Account } from '../../models/Account';
import { getDefaultAccount } from '../list/helpers';
import { WizardProps, WizardState } from './Interfaces';
import { WizardView } from './WizardView';

class Wizard extends Component<WizardProps, WizardState> {
  constructor(props: WizardProps) {
    super(props);
    this.state = { show: props.show, isfirstStep: true, item: getDefaultAccount() as Account
    };
    this.onBankSelect = this.onBankSelect.bind(this);
  }

  componentWillReceiveProps(nextProps: WizardProps) {
    if (this.props.branches !== nextProps.branches) {
      let item = { ...this.state.item } as Account;
      item.branchName = "";
      this.setState({ item });
    } else {
      this.setState({ show: nextProps.show, isfirstStep: true, item: nextProps.item
      });
    }
  }

  onBankSelect(eventKey: any, event: any) {
    this.changeProperty("bankName", event.target.text);
    this.props.onBankSelected(event.target.text);
  }

  handleSave() {
    const item = this.state.item;
    this.props.updateAccount(item);
    this.props.onClose();
  }

  changeProperty(prop: string, value: string) {
    let item = { ...this.state.item } as any;
    item[prop] = value;
    let account = item as Account;
    this.setState({ item: account });
  }

  render() {
    // tslint:disable-next-line:max-line-length
    return <WizardView  show={this.state.show} handleClose={() => this.props.onClose()} isEditing={this.props.isEditing} isfirstStep={this.state.isfirstStep} item={this.state.item } changeAccountName={(e) => this.changeProperty("accountHolderName", e.target.value)}
      // tslint:disable-next-line:max-line-length
      handleBack={() => this.setState({ isfirstStep: true })} handleNext={() => this.setState({ isfirstStep: false })} handleSave={this.handleSave.bind(this)}
      // tslint:disable-next-line:max-line-length
      banks={this.props.banks} branches={this.props.branches} changeEmployeeName={(e) => this.changeProperty("employeeName", e.target.value)} onBankSelect={this.onBankSelect} changeBranchName={(eventKey: any, event: any) => this.changeProperty("branchName", event.target.text)}
      // tslint:disable-next-line:max-line-length
      changeAccountNumber={(e) => this.changeProperty("accountNumber", e.target.value)} changeEmployeeNumber={(e) => this.changeProperty("employeeNumber", e.target.value)} changeType={(e) => this.changeProperty("accountType", e.target.value)} />;
  }
}

export default Wizard;
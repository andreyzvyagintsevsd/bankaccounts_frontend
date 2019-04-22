import { Modal } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { FirstStep } from "./FirstStep";
import { WizardViewProps } from "./Interfaces";
import { WizardFooter } from "./WizardFooter";
import { SecondStep } from "./SecondStep";
import * as React from "react";

export const WizardView: React.SFC<WizardViewProps> = (props) => {
  return <Modal show={props.show} onHide={props.handleClose} size="lg">
    <Modal.Header closeButton>
      <Modal.Title>
        { props.isEditing ?
          <FormattedMessage id="wizard.title.edit" defaultMessage="Edit" />
          : <FormattedMessage id="wizard.title.create" defaultMessage="Create" /> }
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
    { props.isfirstStep === true ?
      <FirstStep
        item={props.item}
        changeAccountName={props.changeAccountName}
        banks={props.banks}
        branches={props.branches}
        changeEmployeeName={props.changeEmployeeName}
        onBankSelect={props.onBankSelect}
        changeBranchName={props.changeBranchName} />
      : <SecondStep
          accountNumber={props.item!.accountNumber}
          changeAccountNumber={props.changeAccountNumber}
          employeeNumber={props.item!.employeeNumber}
          changeEmployeeNumber={props.changeEmployeeNumber}
          accountType={props.item!.accountType}
          changeType={props.changeType} /> }
    </Modal.Body>
    <WizardFooter
      isfirstStep={props.isfirstStep}
      handleClose={props.handleClose}
      handleBack={props.handleBack}
      handleNext={props.handleNext}
      handleSave={props.handleSave}
    />
  </Modal>;
};
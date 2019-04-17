import * as React from "react";
import { Modal, Button } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

interface WizardFooterProps {
  isfirstStep: boolean;
  handleClose: () => void;
  handleBack: () => void;
  handleNext: () => void;
  handleSave: () => void;
}

export const WizardFooter: React.SFC<WizardFooterProps> = (props) => {
 return <Modal.Footer>
   <Button variant="secondary" onClick={props.handleClose}>
     <FormattedMessage id="wizard.close" defaultMessage="Close" />
   </Button>
   { props.isfirstStep === false ?
       <Button variant="primary" onClick={props.handleBack}>
       <FormattedMessage id="wizard.back" defaultMessage="Back" />
     </Button>
     : ""
   }
   {
     props.isfirstStep === true ?
       <Button variant="primary" onClick={props.handleNext}>
         <FormattedMessage id="wizard.next" defaultMessage="Next" />
       </Button>
     :
       <Button variant="primary" onClick={props.handleSave}>
         <FormattedMessage id="wizard.save" defaultMessage="Save Changes" />
       </Button>
   }
 </Modal.Footer>;
};
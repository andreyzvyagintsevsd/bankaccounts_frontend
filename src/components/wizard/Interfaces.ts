import { FirstStepProps } from "./FirstStep";
import { Account } from "../../models/Account";
import { WizardFooterProps } from "./WizardFooter";

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

export interface WizardState {
  item?: Account;
  isfirstStep: boolean;
  show: boolean;
}

export interface WizardViewProps extends FirstStepProps, WizardFooterProps {
  show: boolean;
  isEditing: boolean;
  changeAccountNumber: (e: any) => void;
  changeEmployeeNumber: (e: any) => void;
  changeType: (e: any) => void;
}
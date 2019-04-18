
import { Account } from "../../models/Account";

export interface ItemsListProps {
  itemsList?: Account[];
  getAccountList?: (minAccount: string, maxAccount: string) => void;
  deleteAccount?: (accountId: number) => void;
  updateAccount?: (account: Account) => void;
  getBanks?: () => void;
  getBranches?: (bank: string) => void;
  branches?: string[];
  banks?: string[];
}

export interface ItemsListState {
  show: boolean;
  selectedItem: Account;
  minAccount: string;
  maxAccount: string;
}
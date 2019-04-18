import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Account } from '../../models/Account'
import * as actions from "../../actions";

import { RootState } from "../../reducers";

type Action = ActionType<typeof actions>;

export interface PayloadAction {
  type: string;
  payload: any;
}

import ItemsList  from "./ItemsList";

interface OwnProps {
}

const mapStateToProps = (state: RootState) => ({
  itemsList: state.account.accounts,
  branches: state.dictionary.branches,
  banks: state.dictionary.banks,
});

const mapDispatchToProps = (dispatch: Dispatch<any>, props: OwnProps) => bindActionCreators({
  getAccountList: (minAccount: string, maxAccount: string) => actions.getAccountListAction(minAccount, maxAccount),
  deleteAccount: (accountId: number) => actions.deleteAccountAction(accountId),
  updateAccount: (account: Account) => actions.updateAccountAction(account),
  getBanks: () => actions.getBanksAction(),
  getBranches: (bank: string) => actions.getBranchesAction(bank)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);

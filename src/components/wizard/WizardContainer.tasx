import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "../../actions";

import { RootState } from "../../reducers";
import { Account } from "../../models/Account";

type Action = ActionType<typeof actions>;

interface OwnProps {
}

import { WizardProps } from "./Wizard";
import Wizard  from "./Wizard";

const mapStateToProps = (state: RootState) => ({
  item: state.account.item
});

const mapDispatchToProps = (dispatch: Dispatch<any>, props: {}) => bindActionCreators({
  updateAccount: (account: Account) => actions.updateAccountAction(account)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);

import { ActionType, getType } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import { Account } from "../models/Account";

export interface AccountState {
  readonly loaded: boolean;
  readonly accounts?: Account[];
  readonly item?: Account;
}

const initialState = {
  loaded: false,
  accounts: [],
  item: undefined
};

export const accountReducer = (state: AccountState = initialState, action: Action): AccountState => {

  switch (action.type) {

    case getType(actions.getAccountSuccessAction):
      return Object.assign({}, state, { accounts: action.payload });

    case getType(actions.getAccountFailAction):
      console.error(action.payload.message);
      return state;

    default:
      return state;
  }
};

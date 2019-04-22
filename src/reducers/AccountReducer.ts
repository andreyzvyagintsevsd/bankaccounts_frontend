import { ActionType, getType } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import { Account } from "../models/Account";

export interface AccountState {
  readonly loaded: boolean;
  readonly accounts?: Account[];
  readonly item?: Account;
  readonly min: string;
  readonly max: string;
}

const initialState = {
  loaded: false,
  accounts: [],
  item: undefined,
  min: "",
  max: ""
};

export const accountReducer = (state: AccountState = initialState, action: Action): AccountState => {

  switch (action.type) {

    case getType(actions.getAccountListAction):
      return Object.assign({}, state, { min: action.payload.minAccount, max: action.payload.maxAccount });

    case getType(actions.getAccountSuccessAction):
      return Object.assign({}, state, { accounts: action.payload });

    case getType(actions.getAccountFailAction):
      console.error(action.payload.message);
      return state;

    default:
      return state;
  }
};

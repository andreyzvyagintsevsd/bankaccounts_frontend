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
  accounts: [{
    id: 1,
    accountHolder: "Ivanov",
    employee: "Petrov",
    bank: "Bank",
    branch: "AAA",
    type: "Credit",
    accountNumber: "UA1231452",
    employeeNumber: "MRT1233",
    lastUpdate: "2019-04-12 15:05:00Z"
  },{
    id: 2,
    accountHolder: "Ivanov2",
    employee: "Petrov2",
    bank: "Bank2",
    branch: "BBB",
    type: "Debit",
    accountNumber: "996545",
    employeeNumber: "995455",
    lastUpdate: "2019-04-12 15:05:00Z"
  }],
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

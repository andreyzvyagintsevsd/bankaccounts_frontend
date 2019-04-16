import { createAction } from "typesafe-actions";
import { Account } from "../models/Account";

export const SET_EDITED_ACCOUNT   = "SET_EDITED_ACCOUNT";
export const GET_ACCOUNTS_LIST = "GET_ACCOUNTS_LIST";
export const GET_ACCOUNTS_LIST_SUCCESS   = "GET_ACCOUNTS_LIST_SUCCESS";
export const GET_ACCOUNTS_LIST_FAIL   = "GET_ACCOUNTS_LIST_FAIL";
export const DELETE_ACCOUNT   = "DELETE_ACCOUNT";
export const UPDATE_ACCOUNT   = "UPDATE_ACCOUNT";

// tslint:disable-next-line:max-line-length
export const getAccountListAction = createAction(GET_ACCOUNTS_LIST, resolve => (minAccount: string, maxAccount: string) => resolve({minAccount, maxAccount}));

export const getAccountSuccessAction = createAction(GET_ACCOUNTS_LIST_SUCCESS, resolve => (list: Response) => resolve(list));

export const getAccountFailAction = createAction(GET_ACCOUNTS_LIST_FAIL, resolve => (error: Error) => resolve(error));

export const updateAccountAction = createAction(UPDATE_ACCOUNT, resolve => (account: Account) => resolve(account));

export const deleteAccountAction = createAction(DELETE_ACCOUNT, resolve => (accountId: number) => resolve(accountId));

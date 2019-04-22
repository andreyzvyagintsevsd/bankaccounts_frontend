import { createAction } from "typesafe-actions";
import { Account } from "../models/Account";

export const SET_EDITED_ACCOUNT   = "SET_EDITED_ACCOUNT";
export const GET_ACCOUNTS_LIST = "GET_ACCOUNTS_LIST";
export const GET_ACCOUNTS_LIST_SUCCESS   = "GET_ACCOUNTS_LIST_SUCCESS";
export const GET_ACCOUNTS_LIST_FAIL   = "GET_ACCOUNTS_LIST_FAIL";
export const DELETE_ACCOUNT   = "DELETE_ACCOUNT";
export const UPDATE_ACCOUNT   = "UPDATE_ACCOUNT";

export const GET_BRANCHES = "GET_BRANCHES";
export const GET_BRANCHES_SUCCESS   = "GET_BRANCHES_SUCCESS";
export const GET_BRANCHES_FAIL   = "GET_BRANCHES_FAIL";
export const GET_BANKS = "GET_BANKS";
export const GET_BANKS_SUCCESS   = "GET_BANKS_SUCCESS";
export const GET_BANKS_FAIL   = "GET_BANKS_FAIL";

// tslint:disable-next-line:max-line-length
export const getAccountListAction = createAction(GET_ACCOUNTS_LIST, resolve => (minAccount: string, maxAccount: string) => resolve({minAccount, maxAccount}));
export const getAccountSuccessAction = createAction(GET_ACCOUNTS_LIST_SUCCESS, resolve => (list: Account[]) => resolve(list));

export const getAccountFailAction = createAction(GET_ACCOUNTS_LIST_FAIL, resolve => (error: Error) => resolve(error));
export const updateAccountAction = createAction(UPDATE_ACCOUNT, resolve => (account: Account) => resolve(account));
export const deleteAccountAction = createAction(DELETE_ACCOUNT, resolve => (accountId: number) => resolve(accountId));


export const getBranchesAction = createAction(GET_BRANCHES, resolve => (bank: string) => resolve(bank));
export const getBranchesSuccessAction = createAction(GET_BRANCHES_SUCCESS, resolve => (list: string[]) => resolve(list));
export const getBranchesFailAction = createAction(GET_BRANCHES_FAIL, resolve => (error: Error) => resolve(error));

export const getBanksAction = createAction(GET_BANKS, resolve => () => resolve());
export const getBanksSuccessAction = createAction(GET_BANKS_SUCCESS, resolve => (list: string[]) => resolve(list));
export const getBanksFailAction = createAction(GET_BANKS_FAIL, resolve => (error: Error) => resolve(error));

import { getAccountsListEpic, deleteAccountEpic, updateAccountEpic } from "../epics/AccountEpic";
import { ActionsObservable } from "redux-observable";
import * as actions from "../actions";
import * as api from "../services/Api";
import { of, throwError } from "rxjs";
import { Account } from "../models/Account";

describe("AccountEpic", () => {
  it("getAccountsListEpic success", () => {
    const response = {
      data: {
        entries: [{
        id: 1,
        accountHolderName: "Ivanov",
        employeeName: "Petrov",
        bankName: "aaa",
        branchName: "bbb",
        accountType: "credit",
        accountNumber: "13565",
        employeeNumber: "773",
        lastUpdate: ""
      }]
    }};

    jest.spyOn(api, "getAccountList")
      .mockImplementation((min: string, max: string) => Promise.resolve(response));

    const getAccountListAction = ActionsObservable.of({
      type: "GET_ACCOUNTS_LIST",
      payload: {
          minAccount: "0",
          maxAccount: "10"
      }
    });

    const expectedOutput = ActionsObservable.of(actions.getAccountSuccessAction([
      {
        id: 1,
        accountHolderName: "Ivanov",
        employeeName: "Petrov",
        bankName: "aaa",
        branchName: "bbb",
        accountType: "credit",
        accountNumber: "13565",
        employeeNumber: "773",
        lastUpdate: ""
      }
    ]));
    getAccountsListEpic(getAccountListAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("getAccountsListEpic fails", () => {
    const response = {
      message: "error!",
      name: "", stack: ""};

    jest.spyOn(api, "getAccountList")
      .mockImplementation((min: string, max: string) => Promise.reject(response));

    const getAccountListAction = ActionsObservable.of({
      type: "GET_ACCOUNTS_LIST",
      payload: {
          minAccount: "0",
          maxAccount: "10"
      }
    });
    const expectedOutput = ActionsObservable.of(actions.getAccountFailAction(response));
    getAccountsListEpic(getAccountListAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("deleteAccountEpic success", () => {
    const response = {};

    jest.spyOn(api, "deleteAccount")
      .mockImplementation(() => Promise.resolve(response));

    const deleteAccountAction = ActionsObservable.of({
      type: "DELETE_ACCOUNT",
      payload: 1
    });

    const expectedOutput = ActionsObservable.of(actions.getAccountListAction("0", "1"));
    deleteAccountEpic(deleteAccountAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("deleteAccountEpic fail", () => {
    const response = {
      message: "error!",
      name: "", stack: ""};

    jest.spyOn(api, "deleteAccount")
      .mockImplementation(() => Promise.reject(response));

    const deleteAccountAction = ActionsObservable.of({
      type: "DELETE_ACCOUNT",
      payload: 1
    });

    const expectedOutput = ActionsObservable.of(actions.getAccountFailAction(response));
    deleteAccountEpic(deleteAccountAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("updateAccountEpic success", () => {
    const response = {};

    jest.spyOn(api, "updateAccount")
      .mockImplementation((account: Account) => Promise.resolve(response));

    const updateAccountAction = ActionsObservable.of({
      type: "UPDATE_ACCOUNT",
      payload: {
        id: 1,
        accountHolderName: "Ivanov",
        employeeName: "Petrov",
        bankName: "aaa",
        branchName: "bbb",
        accountType: "credit",
        accountNumber: "13565",
        employeeNumber: "773",
        lastUpdate: ""
      }
    });

    const expectedOutput = ActionsObservable.of(actions.getAccountListAction("0", "1"));
    updateAccountEpic(updateAccountAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("updateAccountEpic fail", () => {
    const response = {
      message: "error!",
      name: "", stack: ""};

    jest.spyOn(api, "updateAccount")
      .mockImplementation((account: Account) => Promise.reject(response));

    const updateAccountAction = ActionsObservable.of({
      type: "UPDATE_ACCOUNT",
      payload: {
        id: 1,
        accountHolderName: "Ivanov",
        employeeName: "Petrov",
        bankName: "aaa",
        branchName: "bbb",
        accountType: "credit",
        accountNumber: "13565",
        employeeNumber: "773",
        lastUpdate: ""
      }
    });

    const expectedOutput = ActionsObservable.of(actions.getAccountFailAction(response));
    updateAccountEpic(updateAccountAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

});
import { accountReducer } from "../reducers/AccountReducer";
import * as actions from "../actions";

describe("AccountReducer", () => {
  it("should return the initial state", () => {
    // pass wrong action
    expect(accountReducer(undefined, { type: "GET_BRANCHES", payload: null})).toEqual(
      {
      loaded: false,
      accounts: [],
      item: undefined,
      min: "",
      max: ""
    }
    );
  });

  it("should handle getAccountListAction", () => {
    expect(accountReducer(undefined, {
        type: actions.GET_ACCOUNTS_LIST,
        payload: { maxAccount: "10", minAccount: "0" }
      })
    ).toEqual(
      {
        loaded: false,
        accounts: [],
        item: undefined,
        min: "0",
        max: "10"
      });

    expect(accountReducer(
      {
        loaded: false,
        accounts: [],
        item: undefined,
        min: "0",
        max: "10"
      }, {
        type: actions.GET_ACCOUNTS_LIST,
        payload: { maxAccount: "20", minAccount: "11" }
      })
    ).toEqual({
        loaded: false,
        accounts: [],
        item: undefined,
        min: "11",
        max: "20"
      }
    );

  });

  it("should handle getAccountSuccessAction", () => {
    expect(accountReducer(undefined, {
        type: actions.GET_ACCOUNTS_LIST_SUCCESS,
        payload: [ {
          id: 0,
          accountHolderName: "",
          employeeName: "",
          bankName: "",
          branchName: "",
          accountType: "",
          accountNumber: "",
          employeeNumber: "",
          lastUpdate: ""
        } ]
      })
    ).toEqual(
      {
        loaded: false,
        accounts: [{
          id: 0,
          accountHolderName: "",
          employeeName: "",
          bankName: "",
          branchName: "",
          accountType: "",
          accountNumber: "",
          employeeNumber: "",
          lastUpdate: ""
        }],
        item: undefined,
        min: "",
        max: ""
      });

    expect(accountReducer(
      {
        loaded: false,
        accounts: [{
          id: 1,
          accountHolderName: "Ivanov",
          employeeName: "Petrov",
          bankName: "aaa",
          branchName: "bbb",
          accountType: "credit",
          accountNumber: "13565",
          employeeNumber: "773",
          lastUpdate: ""
        }],
        item: undefined,
        min: "0",
        max: "10"
      }, {
        type: actions.GET_ACCOUNTS_LIST_SUCCESS,
        payload: [
          {
            id: 1,
            accountHolderName: "Satoshi",
            employeeName: "Nakamoto",
            bankName: "ooo",
            branchName: "lll",
            accountType: "credit",
            accountNumber: "09882",
            employeeNumber: "35632",
            lastUpdate: ""
          }
        ]
      })
    ).toEqual({
        loaded: false,
        accounts: [
          {
            id: 1,
            accountHolderName: "Satoshi",
            employeeName: "Nakamoto",
            bankName: "ooo",
            branchName: "lll",
            accountType: "credit",
            accountNumber: "09882",
            employeeNumber: "35632",
            lastUpdate: ""
          }
        ],
        item: undefined,
        min: "0",
        max: "10"
      }
    );

  });

  it("should handle getAccountFailAction", () => {
    // pass wrong action
    expect(accountReducer(undefined, { type: "GET_ACCOUNTS_LIST_FAIL", payload: {
            message: "error!",
            name: "", stack: ""}})).toEqual(
      {
        loaded: false,
        accounts: [],
        item: undefined,
        min: "",
        max: ""
      }
    );
  });
});
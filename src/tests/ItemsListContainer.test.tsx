import React from 'react';
import { mapStateToProps, mapDispatchToProps, connect, OwnProps } from '../components/list/ItemsListContainer'
import { RootState } from '../reducers';
import * as actions from "../actions";
import { Dispatch, bindActionCreators } from 'redux';
import configureStore from "redux-mock-store";
import { combineAll } from 'rxjs/operators';

const middlewares = []
const mockStore = configureStore(middlewares)

let mapStateToPropsExpected = (state: RootState) => ({
  itemsList: state.account.accounts,
  branches: state.dictionary.branches,
  banks: state.dictionary.banks,
});

let mapDispatchToPropsExpected = (dispatch: Dispatch<any>, props: OwnProps) => bindActionCreators({
  getAccountList: (minAccount: string, maxAccount: string) => actions.getAccountListAction(minAccount, maxAccount),
  deleteAccount: (accountId: number) => actions.deleteAccountAction(accountId),
  updateAccount: (account: Account) => actions.updateAccountAction(account),
  getBanks: () => actions.getBanksAction(),
  getBranches: (bank: string) => actions.getBranchesAction(bank)
}, dispatch);

describe("ItemsListContainer", () => {
  let wrapper: any;
  let items = [{
    id: 1,
    accountHolderName: "Ivanov",
    employeeName: "Petrov",
    bankName: "Bank",
    branchName: "AAA",
    accountType: "Credit",
    accountNumber: "UA1231452",
    employeeNumber: "MRT1233",
    lastUpdate: "2019-04-12 15:05:00Z"
  }];

  beforeEach(() => wrapper = shallow(<ItemsList itemsList={items} />));


  it("mapStateToProps hould have all fields", () => {
    expect(mapStateToProps).toEqual(mapStateToPropsExpected);
  });

  it("mapDispatchToProps hould have all methods", () => {
    let dispatch = jest.fn();

    let objs = mapDispatchToProps(dispatch, null);
    let objsExpected = mapDispatchToPropsExpected(dispatch, null);
    expect(objs.deleteAccount).toEqual(objsExpected.deleteAccount);
    expect(objs.getAccountList).toEqual(objsExpected.getAccountList);
    expect(objs.getBanks).toEqual(objsExpected.getBanks);
    expect(objs.getBranches).toEqual(objsExpected.getBranches);

    expect(objs.updateAccount).toEqual(objsExpected.updateAccount);
  });

  // it("set updateAccount Action", () => {
  //   const component = wrapper.dive();
  //   component.


  //   const initialState = {}
  // const store = mockStore(initialState)

  // // Dispatch the action
  // store.dispatch(addTodo())

  // // Test if your store dispatched the expected actions
  // const actions = store.getActions()
  // const expectedPayload = { type: 'ADD_TODO' }
  // expect(actions).toEqual([expectedPayload])
  // });
});

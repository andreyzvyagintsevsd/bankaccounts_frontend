import { getBanksEpic, getBranchesEpic } from "../epics/DictionaryEpic";
import { ActionsObservable } from "redux-observable";
import * as actions from "../actions";
import * as api from "../services/Api";
import { of, throwError } from "rxjs";

describe("DictionaryEpic", () => {
  it("getBanksEpic success", () => {
    const response = {data: {banks: ["aaa"]}};

    jest.spyOn(api, "getBanks")
      .mockImplementation(() => of(response));

    const getBanksAction = ActionsObservable.of({
      type: "GET_BANKS"
    });
    const expectedOutput = ActionsObservable.of(actions.getBanksSuccessAction(["aaa"]));
    getBanksEpic(getBanksAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("getBanksEpic fails", () => {
    const response = {
      message: "error!",
      name: "", stack: ""};

    jest.spyOn(api, "getBanks")
      .mockImplementation(() => Promise.reject(response));

    const getBanksAction = ActionsObservable.of({
      type: "GET_BANKS"
    });
    const expectedOutput = ActionsObservable.of(actions.getBanksFailAction(response));
    getBanksEpic(getBanksAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("getBranchesEpic success", () => {
    const response = {data: {branches: ["aaa"]}};

    jest.spyOn(api, "getBranches")
      .mockImplementation(() => Promise.resolve(response));

    const getBranchesAction = ActionsObservable.of({
      type: "GET_BRANCHES",
      payload: "aaa"
    });
    const expectedOutput = ActionsObservable.of(actions.getBranchesSuccessAction(["branch"]));
    getBranchesEpic(getBranchesAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });

  it("getBranches fails", () => {
    const response = {
      message: "error!",
      name: "", stack: ""};

    jest.spyOn(api, "getBranches")
      .mockImplementation((bank: string) => Promise.reject(response));

    const getBranchesAction = ActionsObservable.of({
      type: "GET_BRANCHES",
      payload: "aaa"
    });
    const expectedOutput = ActionsObservable.of(actions.getBranchesFailAction(response));
    getBranchesEpic(getBranchesAction, {}, undefined)
      .subscribe((actions) => {
        expect(actions).toEqual(expectedOutput);
      });
  });
});
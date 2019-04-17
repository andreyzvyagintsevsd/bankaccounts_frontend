import { Epic } from "redux-observable";
import { from, of } from 'rxjs';
import { switchMap, filter, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import { RootState } from "../reducers";

import { getAccountList, deleteAccount, updateAccount } from "../services/Api";

const getAccountsListEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.getAccountListAction)),
    switchMap(action =>
      from(getAccountList(action.payload.minAccount, action.payload.maxAccount)).pipe(
        map((response) => actions.getAccountSuccessAction(response.data!.entries)),
        catchError(error => of(actions.getAccountFailAction(error)))
      ),
    )
  );

  const deleteAccountEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.deleteAccountAction)),
    switchMap(action =>
      from(deleteAccount(action.payload)).pipe(
        map(() => actions.getAccountListAction("", "")),
        catchError(error => of(actions.getAccountFailAction(error)))
      ),
    )
  );

  const updateAccountEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.updateAccountAction)),
    switchMap(action =>
      from(updateAccount(action.payload)).pipe(
        map(() => actions.getAccountListAction("", "")),
        catchError(error => of(actions.getAccountFailAction(error)))
      ),
    )
  );

export default [
  getAccountsListEpic,
  updateAccountEpic,
  deleteAccountEpic
];

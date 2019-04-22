import { Epic } from "redux-observable";
import { from, of } from 'rxjs';
import { switchMap, filter, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

import { RootState } from "../reducers";
import { getBanks, getBranches } from "../services/Api";

export const getBanksEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.getBanksAction)),
    switchMap(action =>
      from(getBanks()).pipe(
        map((response) => actions.getBanksSuccessAction(response.data!.banks)),
        catchError(error => of(actions.getBanksFailAction(error)))
      ),
    )
  );

export const getBranchesEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.getBranchesAction)),
    switchMap(action =>
      from(getBranches(action.payload)).pipe(
        map((response) => actions.getBranchesSuccessAction(response.data!.branches)),
        catchError(error => of(actions.getBranchesFailAction(error)))
      ),
    )
  );

export default [
  getBanksEpic,
  getBranchesEpic
];

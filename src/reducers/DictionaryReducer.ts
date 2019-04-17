import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions";

type Action = ActionType<typeof actions>;

export interface DictionaryState {
  readonly loaded: boolean;
  readonly branches?: string[];
  readonly banks?: string[];
}

const initialState = {
  loaded: false,
  branches: [],
  banks: [],
};

export const dictionaryReducer = (state: DictionaryState = initialState, action: Action): DictionaryState => {

  switch (action.type) {

    case getType(actions.getBranchesSuccessAction):
      return Object.assign({}, state, { branches: action.payload });

    case getType(actions.getBranchesFailAction):
      console.error(action.payload.message);
      return state;

    case getType(actions.getBanksSuccessAction):
      return Object.assign({}, state, { banks: action.payload });

    case getType(actions.getBanksFailAction):
      console.error(action.payload.message);
      return state;

    default:
      return state;
  }
};

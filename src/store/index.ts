import { useReducer, createContext } from "react";

interface Istate {
  count: number;
  title: string;
}

export enum TYPES {
  ADD,
  SET_TITLE
}

const initialState: Istate = {
  count: 1,
  title: "Hello World"
};

interface Action<T = any> {
  type: TYPES;
  payload: T;
}

const reducer = (state: Readonly<Istate>, action: Action<any>) => {
  const newState = { ...state };
  switch (action.type) {
    case TYPES.SET_TITLE:
      newState.title = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export type Istore = [string, (value: string) => void];
export const useCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hander: Istore = [
    state.title,
    (value: string) => {
      dispatch({
        type: TYPES.SET_TITLE,
        payload: value
      });
    }
  ];
  return hander;
};

export const StoreContext = createContext<Istore>(null);

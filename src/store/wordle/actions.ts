import { Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'
import { ActionType, WordSetType, State } from "./types";
import wordBank from '../../components/PlayGround/Wordle/wordle-bank.txt';
import axios from "axios";

export const SET_DATA = 'wordle_SET_DATA' as const;
export const SELECT_LETTER = 'wordle_SELECT_LETTER' as const;
export const DELETE_LETTER = 'wordle_DELETE_LETTER' as const;
export const ENTER_LETTER = 'wordle_ENTER_LETTER' as const;
export const SET_DISABLE = 'wordle_SET_DISABLE' as const;

// export const getData = () => ({ type: GET_DATA });

export const setData = (data: WordSetType) => {
  return {
    type: SET_DATA,
    payload: {
      wordSet: data.wordSet,
      todaysWord: data.todaysWord
    },
  }
};

export const selectLetter = (key: string) => {
  return {
    type: SELECT_LETTER,
    payload: key,
  }
};

export const deleteLetter = () => ({ type: DELETE_LETTER });
export const enterLetter = () => ({ type: ENTER_LETTER });
export const setDisableLetter = (letter: string) => ({ type: SET_DISABLE, payload: letter });




// export const REQ_DATA = 'wordle_REQ_DATA' as const;
// export const GET_DATA = 'wordle_GET_DATA' as const;
// type Thunk = ThunkAction<Promise<any>, State, unknown, ActionType>

// export const reqData = (): any => async (dispatch: Dispatch<ActionType>) => {
//   // dispatch({ type: REQ_DATA })
//   try {
//     const { data } = await axios(wordBank);
//     const wordSet: Set<string> = new Set(data.split('\n'));
//     const todaysWord: string = data.split('\n')[Math.floor(Math.random() * wordSet.size)];

//     dispatch(setData({ wordSet, todaysWord }));
//   } catch(e) {
//     throw new Error("Error!!!")
//   }
// };
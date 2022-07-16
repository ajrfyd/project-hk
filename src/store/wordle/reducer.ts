import { boardDefault } from "../../components/PlayGround/Wordle/words";
import { State, ActionType } from "./types";
import { DELETE_LETTER, ENTER_LETTER, SELECT_LETTER, SET_DATA, selectLetter, deleteLetter, enterLetter } from "./actions";
import { generateWordSet } from "../../components/PlayGround/Wordle/words";

const initialState: State = {
  wordSet: { wordSet: new Set(''), todaysWord: ''},
  currentTry: { try: 0, letterPos: 0 },
  board: boardDefault,
  correctWord: '',
  disabledLetters: [],
  gameOver: { gameOver: false, guessWord: false},
};

const wordleReducer = (state: State = initialState, action: ActionType) => {
  switch(action.type) {
    case SET_DATA:
      return {
        ...state,
        wordSet: {
          ...state.wordSet,
          wordSet: action.payload.wordSet,
          todaysWord: action.payload.todaysWord
        }
      }
    case SELECT_LETTER:
      if(state.currentTry.letterPos > 4) return;
      const newBoard = [...state.board];
      newBoard[state.currentTry.try][state.currentTry.letterPos] = action.payload;

      return {
        ...state,
        board: [...newBoard],
        currentTry: {
          ...state.currentTry,
          letterPos: state.currentTry.letterPos + 1
        }
      }
    case DELETE_LETTER:
      if(state.currentTry.letterPos === 0) return;
      const newboard = [...state.board];
      newboard[state.currentTry.try][state.currentTry.letterPos - 1] = '';

      return {
        ...state,
        board: [...newboard],
        currentTry: {
          ...state.currentTry,
          letterPos: state.currentTry.letterPos - 1
        }
      }
    case ENTER_LETTER:
      if(state.currentTry.letterPos !== 5) return;

      let currWord = '';
      for(let i = 0; i < 5; i++) {
        currWord += state.board[state.currentTry.try][i]; 
      }

      // if()
      return {
        ...state,
      }
    default:
      return state;
  }
};


export default wordleReducer;
import { State, ActionType } from "./types";
import { DELETE_LETTER, ENTER_LETTER, SELECT_LETTER, SET_DATA, SET_DISABLE } from "./actions";
import { generateWordSet } from "../../components/PlayGround/Wordle/words";
import wordSet, { todaysWord, board } from "./wordleStore";

// const initialState: State = {
//   wordSet: { wordSet: new Set(''), todaysWord: '' },
//   currentTry: { try: 0, letterPos: 0 },
//   board,
//   correctWord: '',
//   disabledLetters: [],
//   gameOver: { gameOver: false, guessWord: false},
// };
const initialState: State = {
  wordSet,
  todaysWord,
  currentTry: { try: 0, letterPos: 0 },
  board,
  // correctWord: '',
  disabledLetters: [],
  gameOver: false,
  guessWord: false
};

const wordleReducer = (state = initialState, action: ActionType) => {
  switch(action.type) {
    case SET_DATA:
      // return {
      //   ...state,
      //   wordSet: {
      //     ...state.wordSet,
      //     wordSet: action.payload.wordSet,
      //     todaysWord: action.payload.todaysWord
      //   }
      // }
      return {
          ...state,
          wordSet: action.payload.wordSet,
          todaysWord: action.payload.todaysWord
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
      // if(state.currentTry.letterPos === 0) {
      //   return;
      // }
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

      let newCurrTry;
      if(state.wordSet.has(currWord.toLowerCase())) {
        newCurrTry = { try: state.currentTry.try + 1, letterPos: 0 };
      } else {
      }

      let newGameOver;
      if(currWord === state.todaysWord) {
        newGameOver = { gameOver: true, guessWord: true };
      }

      if(state.currentTry.try === 5) {
        newGameOver = { gameOver: true, guessWord: false };
      }

      return {
        ...state,
        currentTry: {
          ...state.currentTry,
          try: newCurrTry?.try,
          letterPos: newCurrTry?.letterPos
        },
        gameOver: newGameOver?.gameOver,
        guessWord: newGameOver?.guessWord
        // gameOver: {
        //   ...state.gameOver,
        //   gameOver: newGameOver?.gameOver,
        //   guessWord: newGameOver?.guessWord,
        // }
      }
    case SET_DISABLE:
      return {
        ...state,
        disabledLetters: [...state.disabledLetters, action.payload]
      }
    default:
      return state;
  }
};


export default wordleReducer;
import { State, ActionType } from "./types";
import { DELETE_LETTER, ENTER_LETTER, SELECT_LETTER, SET_DATA, SET_DISABLE, RESET_GAME, SET_GAME_OVER, SET_GAME_WIN } from './actions';
import { generateWordSet } from "../../components/PlayGround/SubMenu/Wordle/words";
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
  win: {
    win: false,
    attempt: 0
  }
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
    case RESET_GAME:
      return {
        ...state,
        todaysWord,
        currentTry: {
          ...state.currentTry,
          try: 0,
          letterPos: 0
        },
        board: state.board.map(item => {
          if(item.length === 5) {
            return ['', '', '', '', ''];
          } else return item;
        }),
        gameOver: false,
        win: {
          ...state.win,
          win: false,
          attempt: 0
        },
        disabledLetters: state.disabledLetters.filter(item => item === '')
      }
    case SET_GAME_OVER:
      return {
        ...state,
        gameOver: true,
      }
    case SET_GAME_WIN:
      return {
        ...state,
        win: {
          ...state.win,
          win: true,
          attempt: action.payload
        }
      }
    default:
      return state;
  }
};


export default wordleReducer;
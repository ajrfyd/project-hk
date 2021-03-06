import { 
  selectLetter,
  deleteLetter, 
  enterLetter, 
  setData, 
  setDisableLetter, 
  resetGame, 
  setGameOver,
  setGameWin
} from './actions';

type CurrType = {
  try: number;
  letterPos: number;
};

type GameOverType = {
  gameOver: boolean;
  guessWord: boolean;
}

export type WordSetType = {
  wordSet: Set<string>;
  todaysWord: string;
}

export type Win = {
  win: boolean;
  attempt: number;
}

// export type State = {
//   wordSet: WordSetType;
//   currentTry: CurrType;
//   board: string[][];
//   correctWord: string;
//   disabledLetters: string[];
//   gameOver: GameOverType;
// }

export type State = {
  wordSet: Set<string>;
  todaysWord: string,
  currentTry: CurrType;
  board: string[][];
  // correctWord: string;
  disabledLetters: string[];
  gameOver: boolean;
  win: Win;
}

export type ActionType = 
  | ReturnType<typeof selectLetter>
  | ReturnType<typeof deleteLetter>
  | ReturnType<typeof enterLetter>
  | ReturnType<typeof setData>
  | ReturnType<typeof setDisableLetter>
  | ReturnType<typeof resetGame>
  | ReturnType<typeof setGameOver>
  | ReturnType<typeof setGameWin>
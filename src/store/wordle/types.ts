import { selectLetter, deleteLetter, enterLetter, getData, setData } from './actions';

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

export type State = {
  wordSet: WordSetType;
  currentTry: CurrType;
  board: string[][];
  correctWord: string;
  disabledLetters: string[];
  gameOver: GameOverType;
}

export type ActionType = 
  | ReturnType<typeof selectLetter>
  | ReturnType<typeof deleteLetter>
  | ReturnType<typeof enterLetter>
  | ReturnType<typeof setData>
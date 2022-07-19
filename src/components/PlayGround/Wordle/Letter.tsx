import { useEffect } from "react";
import styled from "styled-components";
import useWordle from '../../../hooks/useWordle';
import { useDispatch } from 'react-redux';
import { setDisableLetter } from '../../../store/wordle/actions';

type LetterProps = {
  colPos: number;
  rowPos: number;
  // board: string[][];
}

const Letter = ({ colPos, rowPos }: LetterProps) => {
  const dispatch = useDispatch();
  const wordle = useWordle();
  const { board, todaysWord, currentTry: { try: curTry }, disabledLetters } = wordle;

  const letter = board[rowPos][colPos];

  const correct = todaysWord[colPos] === letter;
  const almost = !correct && letter !== '' && String(todaysWord).toUpperCase().includes(letter);

  const letterState = curTry > rowPos && (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    if(letter !== '' && !correct && !almost) {
      dispatch(setDisableLetter(letter));
    }
  }, [curTry])

  return (
    <Container id={letterState || ''}>
      {letter}
    </Container>
  )
}

export default Letter;

const Container = styled.div`
  flex: 1;
  border: 1px solid grey;
  margin: 5px;
  display: grid;
  place-items: center;
  font-size: 30px;
  font-weight: bolder;
  color: #000;
  /* font-family: Arial, Helvetica, sans-serif; */

  &:hover {
    transform: scale(1.1);
    border: 1px solid #6200ee;
    box-shadow: 0 0 2000px #6200ee;
  }

  &#correct {
    background-color: #77ff22;
  }

  &#almost {
    background-color: #b49f39;
  }

  &#error {
    background-color: #ddd;
  }

`
import { useEffect, useState } from "react";
import styled from "styled-components";
import useWordle from '../../../hooks/useWordle';
import { useDispatch } from 'react-redux';
import { setDisableLetter } from '../../../store/wordle/actions';
import { setGameWin, setGameOver } from '../../../store/wordle/actions';

type LetterProps = {
  colPos: number;
  rowPos: number;
  // board: string[][];
}

const Letter = ({ colPos, rowPos }: LetterProps) => {
  const dispatch = useDispatch();
  const wordle = useWordle();
  const { board, todaysWord, currentTry: { try: curTry }, disabledLetters } = wordle;
  const correctArr = todaysWord.split('');
  // 한글자
  const letter = board[rowPos][colPos];

  const correctLetter = () => {
    // 배열화 된 정답의 colPos 즉 5글자의 순서 중 board랑 같다면
    return correctArr[colPos] === board[rowPos][colPos].toLowerCase();
  }

  // 한글자 맞춤 여부
  const correct = correctLetter();
  const almost = !correct && letter !== '' && String(todaysWord).toUpperCase().includes(letter);

  const letterState = curTry > rowPos && (correct ? 'correct' : almost ? 'almost' : 'error');

  useEffect(() => {
    // 모든 글자 정답
    const win = todaysWord === board[rowPos].join('').toLowerCase();
    if(correct && win) {
      dispatch(setGameWin(curTry));
    };

    if(letter !== '' && !correct && !almost) {
      dispatch(setDisableLetter(letter));
    }

    if(!win && curTry === 5) {
      dispatch(setGameOver());
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

  
  &#almost {
    background-color: #b49f39;
  }
  
  &#error {
    background-color: #ddd;
  }

  &#correct {
    background-color: #11ec0ab8;
    /* background-color: red; */
  }
  
`
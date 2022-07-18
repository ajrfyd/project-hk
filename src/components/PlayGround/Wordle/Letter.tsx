import { useEffect } from "react";
import styled from "styled-components";
import useWordle from '../../../hooks/useWordle';
import { useDispatch } from 'react-redux';
import { getData } from '../../../store/wordle/actions';
import { boardDefault } from './words';

type LetterProps = {
  colPos: number;
  rowPos: number;
  // board: string[][];
}

const Letter = ({ colPos, rowPos }: LetterProps) => {
  const wordle = useWordle;
  // const { correctWord }  = wordle;
  const letter = boardDefault[rowPos][colPos];

  useEffect(() => {
    getData();
  }, [])

  return (
    <Container>
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
  color: white;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    transform: scale(1.1);
    border: 1px solid #6200ee;
    box-shadow: 0 0 2000px #6200ee;
  }
`
import { useState, useEffect, createContext } from "react";
import styled from "styled-components";
import { commonContainerStyle } from "../../../Style/styles";
import { boardDefault } from "./words";
import { generateWordSet } from "./words";
import Board from './Board';
import useWordle from '../../../hooks/useWordle';
import { useDispatch } from "react-redux";
import { getData } from '../../../store/wordle/actions';
import { notify } from '../../../store/notify/actions';

type WordSet = {
  wordSet: Set<string>,
  todaysWord: string;
};

const Wordle = () => {
  const [word, setWord] = useState(new Set<string>());
  const [answer, setAnswer] = useState('');
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ try: 0, letterPos: 0 });

  const dispatch = useDispatch();
  const wordle = useWordle();

  
  // const getData = async () => {
  //   const { wordSet, todaysWord } = await generateWordSet();
  //   setWord(wordSet);
  //   setAnswer(todaysWord);
  // };

  useEffect(() => {
    dispatch(getData());
    // getData();
  }, []);

  console.log(wordle);
  return (
    <Container>
      <Title>Wordle</Title>
      <GameContainer>
        <Board 
          board={board}
        />        
      </GameContainer>
    </Container>
  )
}

export default Wordle;

const Container = styled.div`
  ${commonContainerStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.header`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 2rem;
  letter-spacing: 5px;
`

const GameContainer = styled.div`
  border: 2px solid red;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
`
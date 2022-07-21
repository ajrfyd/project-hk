import { useEffect } from "react";
import styled from "styled-components";
import { commonContainerStyle } from "../../../Style/styles";
import Board from './Board';
import useWordle from '../../../hooks/useWordle';
import { useDispatch } from "react-redux";
import KeyBoard from './KeyBoard';
import GameOver from "./GameOver";
import Notification from '../../Notification/Notification';
import { resetGame } from '../../../store/wordle/actions';



type WordSet = {
  wordSet: Set<string>,
  todaysWord: string;
};

const Wordle = () => {
  const wordle = useWordle();
  // const [word, setWord] = useState(new Set<string>());
  // const [answer, setAnswer] = useState('');
  // const [board, setBoard] = useState(boardDefault);
  // const [board, setBoard] = useState();
  // const [currAttempt, setCurrAttempt] = useState({ try: 0, letterPos: 0 });
  const { gameOver, win } = wordle;
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch(reqData());
  }, []);

  return (
    <Container>
      <Title>Wordle</Title>
      <GameContainer>
        <Board/>
        {
          (gameOver || win.win) ? <GameOver/> : <KeyBoard/>
        }
      </GameContainer>
      <Notification />
    </Container>
  )
}

export default Wordle;

const Container = styled.div`
  ${commonContainerStyle};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
`

const Title = styled.header`
  font-size: 4rem;
  font-weight: bold;
  margin-top: 2rem;
  letter-spacing: 5px;
`

const GameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-top: 20px;
  flex-direction: column;
`
import styled from "styled-components";
import useWordle from "../../../../hooks/useWordle";
import { useDispatch } from "react-redux";
import { resetGame } from "../../../../store/wordle";

const GameOver = () => {
  const { gameOver, win } = useWordle();
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>
        {
          gameOver ? 'Game Over....try Again...' : win.win ? `Congratulations!! You attempt to ${win.attempt} times!` : null
        }
      </h1>
      <Button onClick={() => dispatch(resetGame())}>Reset</Button>
    </Container>
  )
}

export default GameOver;

const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  gap: 2rem;
`

const Button = styled.button`
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 1.5rem;
  padding: .5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, .4);

  &:hover {
    color: rebeccapurple;
  }
`
import styled from "styled-components";
import useWordle from "../../../hooks/useWordle";

const GameOver = () => {
  const { gameOver, win } = useWordle();

  return (
    <Container>
      <h1>
        {
          gameOver && 'Game Over....try Again...'
        }
      </h1>
      <h3>
        
      </h3>
    </Container>
  )
}

export default GameOver;

const Container = styled.div`
  margin-top: 1rem;
`
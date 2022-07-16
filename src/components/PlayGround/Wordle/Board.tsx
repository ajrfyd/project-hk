import styled from 'styled-components';
import Letter from './Letter';

type BoardProps = {
  board: string[][];
}

const Board = ({ board }: BoardProps) => {

  return (
    <Container>
      { " " }
      <Row >
        <Letter colPos={0} rowPos={0} board={board}/>
        <Letter colPos={1} rowPos={0} board={board}/>
        <Letter colPos={2} rowPos={0} board={board}/>
        <Letter colPos={3} rowPos={0} board={board}/>
        <Letter colPos={4} rowPos={0} board={board}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={1} board={board}/>
        <Letter colPos={1} rowPos={1} board={board}/>
        <Letter colPos={2} rowPos={1} board={board}/>
        <Letter colPos={3} rowPos={1} board={board}/>
        <Letter colPos={4} rowPos={1} board={board}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={2} board={board}/>
        <Letter colPos={1} rowPos={2} board={board}/>
        <Letter colPos={2} rowPos={2} board={board}/>
        <Letter colPos={3} rowPos={2} board={board}/>
        <Letter colPos={4} rowPos={2} board={board}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={3} board={board}/>
        <Letter colPos={1} rowPos={3} board={board}/>
        <Letter colPos={2} rowPos={3} board={board}/>
        <Letter colPos={3} rowPos={3} board={board}/>
        <Letter colPos={4} rowPos={3} board={board}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={4} board={board}/>
        <Letter colPos={1} rowPos={4} board={board}/>
        <Letter colPos={2} rowPos={4} board={board}/>
        <Letter colPos={3} rowPos={4} board={board}/>
        <Letter colPos={4} rowPos={4} board={board}/>
      </Row>
      <Row >
        <Letter colPos={0} rowPos={5} board={board}/>
        <Letter colPos={1} rowPos={5} board={board}/>
        <Letter colPos={2} rowPos={5} board={board}/>
        <Letter colPos={3} rowPos={5} board={board}/>
        <Letter colPos={4} rowPos={5} board={board}/>
      </Row>
    </Container>
  )
}

export default Board;

const Container = styled.div`
  width: 50%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px;
  height: 100%;
`
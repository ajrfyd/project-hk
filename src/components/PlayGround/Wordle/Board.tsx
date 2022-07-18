import styled from 'styled-components';
import Letter from './Letter';

type BoardProps = {
  board: string[][] | [];
}

const Board = () => {

  return (
    <Container>
      { " " }
      <Row >
        <Letter colPos={0} rowPos={0}/>
        <Letter colPos={1} rowPos={0}/>
        <Letter colPos={2} rowPos={0}/>
        <Letter colPos={3} rowPos={0}/>
        <Letter colPos={4} rowPos={0} />
      </Row>
      <Row>
        <Letter colPos={0} rowPos={1}/>
        <Letter colPos={1} rowPos={1}/>
        <Letter colPos={2} rowPos={1}/>
        <Letter colPos={3} rowPos={1}/>
        <Letter colPos={4} rowPos={1}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={2}/>
        <Letter colPos={1} rowPos={2}/>
        <Letter colPos={2} rowPos={2}/>
        <Letter colPos={3} rowPos={2}/>
        <Letter colPos={4} rowPos={2}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={3}/>
        <Letter colPos={1} rowPos={3}/>
        <Letter colPos={2} rowPos={3}/>
        <Letter colPos={3} rowPos={3}/>
        <Letter colPos={4} rowPos={3}/>
      </Row>
      <Row>
        <Letter colPos={0} rowPos={4}/>
        <Letter colPos={1} rowPos={4}/>
        <Letter colPos={2} rowPos={4}/>
        <Letter colPos={3} rowPos={4}/>
        <Letter colPos={4} rowPos={4}/>
      </Row>
      <Row >
        <Letter colPos={0} rowPos={5}/>
        <Letter colPos={1} rowPos={5}/>
        <Letter colPos={2} rowPos={5}/>
        <Letter colPos={3} rowPos={5}/>
        <Letter colPos={4} rowPos={5}/>
      </Row>
    </Container>
  )
}

export default Board;

const Container = styled.div`
  width: 40%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Row = styled.div`
  display: flex;
  /* flex-direction: row; */
  margin: 5px;
  height: 100%;
  width: 90%;
`
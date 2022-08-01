import { commonContainerStyle } from "../../../../Style/styles";
import styled from "styled-components";
import Resizable from "./Resizable";

const Component = () => {

  return (
    <Container>
      <GridItem>
        <Resizable />
      </GridItem>
      <GridItem>
        <Resizable />
      </GridItem>
      <GridItem>
        <Resizable />
      </GridItem>
      <GridItem>
        <Resizable />
      </GridItem>
    </Container>
  )
}

export default Component;

const Container = styled.div`
  ${commonContainerStyle};

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  gap: 1rem;
`

const GridItem = styled.div`
  border: 5px solid #ddd;
  position: relative;
  overflow: scroll;
`
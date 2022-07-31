import React from "react";
import styled from "styled-components";
import { commonContainerStyle } from "../../../../Style/styles";

const Board = () => {

  return (
    <Container>
      <Title>Board</Title>
    </Container>
  )
}

export default Board;

const Container = styled.div`
  ${commonContainerStyle};
`

const Title = styled.h1`
`
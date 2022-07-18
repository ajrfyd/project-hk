import { useCallback, useEffect } from 'react';
import styled from 'styled-components';

type KeyProps = {
  keyVal: string;
  disabled: boolean;
}

const Key = ({ keyVal, disabled }: KeyProps) => {

  

  return (
    <Container>
      {keyVal}
    </Container>
  )
}

export default Key;

const Container = styled.div`
  width: 50px;
  height: 70px;
  margin: 5px;
  border-radius: 4px;
  display: grid;
  place-items: center;
  font-size: 20px;
  background-color: grey;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`
import { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { selectLetter, deleteLetter, enterLetter } from '../../../store/wordle/actions';


type KeyProps = {
  keyVal: string;
  disabled?: boolean;
  bigKey?: boolean;
}

const Key = ({ keyVal, disabled, bigKey }: KeyProps) => {
  const dispatch = useDispatch();

  const onSelect = () => {
    if(keyVal === 'Enter') {
      dispatch(enterLetter());
    } else if(keyVal === 'Delete') {
      dispatch(deleteLetter());
    } else {
      dispatch(selectLetter(keyVal));
    }
  }

  return (
    <Container 
      id={bigKey ? 'big' : disabled && 'disabled' || ''}
      onClick={onSelect}
    >
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
  font-size: 1.6rem;
  background-color: grey;
  color: white;
  font-weight: bolder;
  /* font-family: Arial, Helvetica, sans-serif; */
  cursor: pointer;

  #big {
    width: 100px;
  }

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { selectLetter, deleteLetter, enterLetter } from '../../../store/wordle/actions';


type KeyProps = {
  keyVal: string;
  disabled?: boolean;
  bigKey?: boolean;
}

type KeyProp = {
  bigKey?: boolean;
  disabled?: boolean;
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
      bigKey={bigKey}
      disabled={disabled}
      onClick={onSelect}
    >
      {keyVal}
    </Container>
  )
}

export default Key;

const Container = styled.div<KeyProp>`
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

  ${({ bigKey }) => bigKey && css`
    width: 100px;
  `}

  ${({ disabled }) => disabled && css`
    background-color: red;
  `}

  &:hover {
    transform: scale(1.1);
    color: red;
  }
`
import { useEffect, useCallback } from "react";
import styled from "styled-components";
import Key from "./Key";
import useWordle from '../../../hooks/useWordle';
import { enterLetter, deleteLetter, selectLetter } from "../../../store/wordle";
import { useDispatch } from "react-redux";

const KeyBoard = () => {
  const dispatch = useDispatch();
  const wordle = useWordle();
  const { currentTry, disabledLetters } = wordle;
  
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];


  const onKeyboard = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      dispatch(enterLetter());
    } else if(e.key === 'Backspace') {
      dispatch(deleteLetter());
    } else {
      keys1.forEach(key => {
        if(e.key.toLowerCase() === key.toLowerCase()) {
          dispatch(selectLetter(key));
        };
      })
      keys2.forEach(key => {
        if(e.key.toLowerCase() === key.toLowerCase()) {
          dispatch(selectLetter(key));
        };
      })
      keys3.forEach(key => {
        if(e.key.toLowerCase() === key.toLowerCase()) {
          dispatch(selectLetter(key));
        };
      })
    }
  }, [currentTry]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyboard);

    return () => {
      document.removeEventListener('keydown', onKeyboard);
    }
  }, [onKeyboard]);

  return (
    <Container>
      <Line1>
        {
          keys1.map(key => {
            return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)}/>
          })
        }
      </Line1>
      <Line2>
        {
          keys2.map(key => {
            return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)}/>
          })
        }
      </Line2>
      <Line3>
        <Key keyVal={'Enter'} bigKey/>
        {
          keys3.map(key => {
            return <Key key={key} keyVal={key} disabled={disabledLetters.includes(key)}/>
          })
        }
        <Key keyVal={'Delete'} bigKey/>
      </Line3>
    </Container>
  )
}

export default KeyBoard;


const Container = styled.div`
  width: 700px;
  height: 300px;
  margin-top: 60px;
`

const Line1 = styled.div`
  flex: 33%;
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: 5px;
`

const Line2 = styled(Line1)`
  /* flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px; */
`

const Line3 = styled(Line1)`
  /* flex: 33%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px; */
`
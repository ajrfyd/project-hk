import { useEffect, useCallback } from "react";
import styled from "styled-components";
import Key from "./Key";
import useWordle from '../../../hooks/useWordle';
import { enterLetter, deleteLetter, selectLetter } from "../../../store/wordle";
import { useDispatch } from "react-redux";
import { notify } from "../../../store/notify/actions";
import { todaysWord } from '../../../store/wordle/wordleStore';

const KeyBoard = () => {
  const dispatch = useDispatch();
  const wordle = useWordle();
  const { currentTry, disabledLetters, wordSet, board } = wordle;
  
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const dispatchKey = (keys: string[], eventKey: string) => {
    keys.forEach(key => {
      if(eventKey.toLowerCase() === key.toLowerCase()) {
        dispatch(selectLetter(key));
      };
    })
  }

  const onKeyboard = useCallback((e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      if(currentTry.letterPos === 0 || currentTry.letterPos < 5) {
        // if(wordSet.has())
        dispatch(notify('단어를 입력하지 않았습니다'))
        return;
      };
      const word = board[currentTry.try].join('').toLowerCase();
      if(wordSet.has(word)) {
        dispatch(enterLetter());
      } else {
        dispatch(notify('단어 사전에 존재하지 않습니다'))
        return;
      }
    } else if(e.key === 'Backspace') {
      // backspace 연타 방지
      if(currentTry.letterPos === 0) {
        dispatch(notify('지울 단어가 없습니다.'))
        return;
      };
      dispatch(deleteLetter());
    } else {
      if(board[currentTry.try][4] !== '') {
        return;
      }
      dispatchKey(keys1, e.key);
      dispatchKey(keys2, e.key);
      dispatchKey(keys3, e.key);
    }
  }, [currentTry]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyboard);

    return () => {
      document.removeEventListener('keydown', onKeyboard);
    }
  }, [onKeyboard]);

  console.log(todaysWord)
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
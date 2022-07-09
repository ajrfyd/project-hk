import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/Home';
import Header from './Container/Header/Header';
import Nav from './Container/Nav/Nav';
import styled, { css } from 'styled-components';
import Profile from './components/Profiile/Profile';
import PlayGround from './components/PlayGround/PlayGround';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';

type BtnProps = {
  visible: boolean;
}

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <Header />
      <Body >
        <Nav visible={visible}/>
        <VisibleBtn 
          onClick={() => setVisible(visible => !visible)}
          visible={visible}
        >
          {
            visible ? <BsBoxArrowInLeft size={20}/> : <BsBoxArrowInRight size={20}/>
          }
        </VisibleBtn>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/playground' element={<PlayGround />}/>
        </Routes>
      </Body>
    </div>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

const VisibleBtn = styled.button<BtnProps>`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  transition: .3s;
  z-index: 10;
  ${({ visible }) => visible && css`
    left: 270px;
  `}
`
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/Home';
import Nav from './Container/Nav/Nav';
import styled, { css } from 'styled-components';
import Profile from './Container/Profiile/Profile';
import PlayGround from './components/PlayGround/PlayGround';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import useMenu from './hooks/useMenu';
import { createBrowserHistory } from "history";
import channelService from './utils/channelService';
import Infinite from './components/PlayGround/SubMenu/Infinite/Infinite';
import Wordle from './components/PlayGround/SubMenu/Wordle/Wordle';
import Board from './components/PlayGround/SubMenu/Board/Board';
import Component from './components/PlayGround/SubMenu/Component/Component';

type BtnProps = {
  visible: boolean;
  navWidth: number;
}

const App = () => {
  const [visible, setVisible] = useState(true);
  const [navWidth, setNavWidth] = useState(0);
  const menu = useMenu();
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  // 새로고침 해도 Home에 고정되지 않도록 수정

  useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    const channel = new channelService();

    if(!menu[path]) {
      if(path === '') {
        dispatch({ type: 'menu/GO_HOME', payload: 'home' });
      } else {
        dispatch({ type: `menu/GO_${path.toUpperCase()}`, payload: path });
      }
    }

    // 뒤로가기 감지
    history.listen((h) => {
      const { location: { pathname }} = h;
      const popPath = pathname.split('/')[1];
      if(popPath === '') {
        dispatch({ type: 'menu/GO_HOME', payload: 'home' });
      } else {
        dispatch({ type: `menu/GO_${popPath.toUpperCase()}`, payload: popPath });
      }
    })

    if(channel) {
      channel.boot({
        pluginKey: process.env.REACT_APP_CAHNNEL_PLUG_KEY
      })
    }

    return () => {
      channel.shutdown();
    };
  }, [dispatch]);

  
  return (
    <Container >
      <Nav visible={visible} setNavWidth={setNavWidth}/>
      <VisibleBtn 
        onClick={() => setVisible(visible => !visible)}
        visible={visible}
        navWidth={navWidth}
      >
        {
          visible ? <BsBoxArrowInLeft size={20}/> : <BsBoxArrowInRight size={20}/>
        }
      </VisibleBtn>
      <Routes>
        <Route path='/' element={<Home setVisible={setVisible}/>} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/playground' element={<PlayGround />} />
        <Route path='playground/infinite' element={<Infinite />}/>
        <Route path='playground/wordle' element={<Wordle />}/>
        <Route path='playground/board' element={<Board />}/>
        <Route path='playground/component' element={<Component />}/>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
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
  ${({ visible, navWidth }) => visible && css`
    left: calc(${navWidth}px + 1rem);
  `}
`
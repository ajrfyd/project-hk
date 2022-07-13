import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/Home';
import Nav from './Container/Nav/Nav';
import styled, { css } from 'styled-components';
import Profile from './components/Profiile/Profile';
import PlayGround from './components/PlayGround/PlayGround';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import useMenu from './components/hooks/useMenu';
import { createBrowserHistory } from "history";

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
    
    if(!menu[path]) {
      if(path === '') {
        dispatch({ type: 'menu/GO_HOME', payload: 'home' });
      } else {
        dispatch({ type: `menu/GO_${path.toUpperCase()}`, payload: path });
      }
    }

    history.listen((h) => {
      const { action, location: { pathname }} = h;
      const popPath = pathname.split('/')[1];
      if(popPath === '') {
        dispatch({ type: 'menu/GO_HOME', payload: 'home' });
      } else {
        dispatch({ type: `menu/GO_${popPath.toUpperCase()}`, payload: popPath });
      }
    })
  }, []);


  console.log('App');

  return (
    <Container >
      {/* <Header /> */}
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
        <Route path='/playground' element={<PlayGround />}/>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  height: 100vh;
`

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
  ${({ visible, navWidth }) => visible && css`
    left: calc(${navWidth}px + 1rem);
  `}
`
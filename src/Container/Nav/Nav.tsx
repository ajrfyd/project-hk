import { useEffect, useState, useRef, SetStateAction } from "react";
import styled, { css, keyframes } from "styled-components";
import { list } from "../../store/menu";
import Menu from "../../components/Nav/Menu";
import MiniProfile from './MiniProfile';
import useMenu from '../../hooks/useMenu';
import SubMenu from '../../components/PlayGround/SubMenu/SubMenu';

type NavProps = {
  visible: boolean;
  setNavWidth: React.Dispatch<SetStateAction<number>>;
}

type AnimateType = {
  animate: boolean;
  visible: boolean;
}

const Nav = ({ visible, setNavWidth }: NavProps) => {
  // const { menu } = useSelector((state: RootState) => state);
  const menu = useMenu();
  const [currVisible, setCurrVisible] = useState(visible);
  const [animate, setAnimate] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(currVisible && !visible) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 250);
    }
    
    setCurrVisible(visible);

    if(navRef.current && currVisible) {
      setNavWidth(navRef.current.clientWidth);
    } else {
      setNavWidth(0);
    };
  }, [visible, currVisible]);
  

  useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    if(path === 'playground') {
      setOpenSubMenu(true);
    }

    return () => setOpenSubMenu(false);
  }, [menu])


  if(!animate && !currVisible) return null;

  return (
    <Container animate={animate} visible={visible} ref={navRef}>
      <MiniProfile />
      <ul>
        {
          list.map(item => <Menu key={item} active={menu[item]}>{item}</Menu>)
        }
      </ul>
      <hr style={{ width: '80%', marginTop: '2rem' }}/>
      <SubMenu visible={openSubMenu}/>
    </Container>
  )
}

export default Nav;


const slideInLeft = keyframes`
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
  }
`

const slideOutLeft = keyframes`
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
  }
  100% {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    -ms-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0)
  }
`

const Container = styled.nav<AnimateType>`
  width: 20vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, .1);
  animation-name: ${slideInLeft};
  animation-duration: .5s;
  animation-fill-mode: both;
  overflow: scroll;

  ${(props) => props.animate && css`
    animation-name: ${slideOutLeft};
  `}
  /* overflow: hidden; */
`
import { useEffect, useState, useRef, SetStateAction } from "react";
import styled, { css, keyframes } from "styled-components";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { list } from "../../store/menu";
import Menu from "../../components/Nav/Menu";

type NavProps = {
  visible: boolean;
  setNavWidth: React.Dispatch<SetStateAction<number>>;
}

type AnimateType = {
  animate: boolean;
  visible: boolean;
}

const Nav = ({ visible, setNavWidth }: NavProps) => {
  const { menu } = useSelector((state: RootState) => state);
  const [currVisible, setCurrVisible] = useState(visible);
  const [animate, setAnimate] = useState(false);
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


  if(!animate && !currVisible) return null;

  return (
    <Container animate={animate} visible={visible} ref={navRef}>
      <ul>
        {
          list.map(item => <Menu key={item}>{item}</Menu>)
        }
      </ul>
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
  width: 15vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, .1);
  animation-name: ${slideInLeft};
  animation-duration: .5s;
  animation-fill-mode: both;
  ${(props) => props.animate && css`
    animation-name: ${slideOutLeft};
  `}
`
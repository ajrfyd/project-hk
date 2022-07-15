import styled, { css, keyframes } from 'styled-components';
import { playList } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from 'react';

type SubMenuProps = {
  visible: boolean;
}

type PropType = {
  animate: boolean;
}

const SubMenu = ({ visible }: SubMenuProps) => {
  const [currVisible, setCurrVisible] = useState(visible);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(!visible && currVisible) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 250);
    }

    setCurrVisible(visible);
  }, [visible, currVisible]);

  if(!animate && !currVisible) return null;

  return (
    <Container animate={animate}>
      {
        playList.map(item => <Menu key={item.idx} path={item.name}>{item.name}</Menu>)
      }
    </Container>
  )
}

export default SubMenu;

const zoomInDown = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
    animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
    animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
  }
`

const zoomOutUp = keyframes`
  40% {
    opacity: 1;
    -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -ms-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, .055, .675, .19);
    animation-timing-function: cubic-bezier(0.55, .055, .675, .19)
  }
  100% {
    opacity: 0;
    -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -ms-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
    -webkit-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, .885, .32, 1);
    animation-timing-function: cubic-bezier(0.175, .885, .32, 1)
  }
`

const Container = styled.ul<PropType>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 3px;
  animation-name: ${zoomInDown};
  animation-duration: 1s;
  animation-fill-mode: both;

  ${({ animate }) => animate && css`
    animation-name: ${zoomOutUp};
  `}
`
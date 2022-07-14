import styled, { css, keyframes } from "styled-components";
import { useLocation, useNavigate } from 'react-router-dom';

type MenuProps = {
  children: React.ReactNode;
  path: string;
} 

type ActiveProp = {
  active: boolean;
}

const Menu = ({ children, path }: MenuProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const active = pathname.split('/')[2] === path;

  const goPlayground = () => {
    navigate(`/playground/${children}`);
  };

  return ( 
    <Container onClick={goPlayground} active={active}>
      {children} 
    </Container>
  )
}

export default Menu;

const goLeft = keyframes`
  0% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(5px);
  }
`

const goRight = keyframes`
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(-15px);
  }
`

const Container = styled.li<ActiveProp>`
  cursor: pointer;
  border: 3px solid transparent;
  padding: 2px 0;
  transition: .3s;
  position: relative;
  text-align: center;

  ${({ active }) => active && css`
    &:after {
      content: '<';
      position: absolute;
      color: red;
      transition: .3s;
      animation: ${goLeft} .3s both;
      }
    }

    &:before{
      content: '>';
      position: absolute;
      color: red;
      transition: .3s;
      animation: ${goRight} .3s both;
    }
  `}


`
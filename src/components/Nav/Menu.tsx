import React from "react";
import styled, { css } from "styled-components";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { utils } from '../../store/utils/utils';
import { GO_HOME, GO_PLAYGROUND, GO_PROFILE, goPlayGround } from "../../store/menu/actions";

type MenuProps = {
  children: React.ReactNode;
  active: boolean;
}

type ActiveProps = {
  active: boolean;
}

const Menu = ({ children, active }: MenuProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const menuHandler = () => {
    dispatch({ type: `menu/GO_${children?.toString().toUpperCase()}`, payload: children });
    navigate(children === 'home' ? '/' : `${children}`);
  };

  return (
    <Container active={active}>
      {/* <Link to={children === 'home' ? '/' : `/${children}`}>
        {children}
      </Link> */}
      <div onClick={menuHandler}>
        {children}
      </div>
    </Container>
  )
}

export default Menu;

const Container = styled.li<ActiveProps>`
  /* display: block; */
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2rem;
  padding: 0 1rem;
  transition: .5s;
  border-radius: 10px;
  ${({ active }) => active && css `
    box-shadow: 2px 2px 2px #00000080, 
      2px 1px 12px #00000080,
      2px 2px 10px #00000080,
      inset 2px 2px 10px #00000080;
  `}

  a {
    display: block;
    width: 100%;
    /* border: 1px solid red; */
  }

  &:hover {
    animation: animate 3s linear infinite;
    transform: scale(1.05);
    /* text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
      0 0 200px #0072ff; */
    box-shadow: 2px 2px 2px #00000080, 
      2px 1px 12px #00000080,
      2px 2px 10px #00000080, 
      /* 2px 2px 3px #00000080, */
      /* inset 2px 2px 10px #00000080, */
      /* inset 2px 2px 10px #00000080,  */
      /* inset 2px 2px 10px #00000080, */
      inset 2px 2px 10px #00000080;

    /* @keyframes animate {
      from {
        filter: hue-rotate(0deg);
      }
      to {
        filter: hue-rotate(360deg);
      }
    }    */

  }

  
`
import React from "react";
import styled, { css } from "styled-components";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { utils } from '../../store/utils/utils';

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
    <Container active={active} onClick={menuHandler}>
      <span >
        {children}
      </span>
    </Container>
  )
}

export default Menu;

const Container = styled.li<ActiveProps>`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2rem;
  padding: 0 1rem;
  transition: .5s;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;

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
    animation: animate 3s linear;
    transform: perspective(400px) rotateY(45deg) scale(1.05);
    box-shadow: 2px 2px 2px #00000080, 
      2px 1px 12px #00000080,
      2px 2px 10px #00000080, 
      /* 2px 2px 3px #00000080, */
      /* inset 2px 2px 10px #00000080, */
      /* inset 2px 2px 10px #00000080,  */
      /* inset 2px 2px 10px #00000080, */
      inset 2px 2px 10px #00000080;
    &:nth-child(even) {
      transform: perspective(400px) rotateY(-45deg) scale(1.05);
    }
  }

  
`
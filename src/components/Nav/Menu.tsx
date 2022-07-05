import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

type MenuProps = {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  return (
    <Container>
      <Link to={children === 'home' ? '/' : `/${children}`}>
        {children}
      </Link>
    </Container>
  )
}

export default Menu;

const Container = styled.li`
  /* display: block; */
  margin-top: 1rem;
  font-weight: bold;
  font-size: 2rem;
  padding: 0 1rem;
  transition: .5s;
  border-radius: 10px;


  a {
    display: block;
    width: 100%;
    /* border: 1px solid red; */
  }

  &:hover {
    animation: animate 3s linear infinite;
    transform: translateX(15px) scale(1.05);
    /* text-shadow: 0 0 50px #0072ff, 0 0 100px #0072ff, 0 0 150px #0072ff,
      0 0 200px #0072ff; */
    box-shadow: 2px 2px 2px #00000080, 
      10px 1px 12px #00000080,
      2px 2px 10px #00000080, 
      2px 2px 3px #00000080,
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
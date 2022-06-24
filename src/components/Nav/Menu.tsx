import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

type MenuProps = {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {

  return (
    <Container>
      <Link to={`/${children}`}>
        {children}
      </Link>
    </Container>
  )
}

export default Menu;

const Container = styled.li`
  
`
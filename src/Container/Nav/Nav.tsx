import React from "react";
import styled from "styled-components";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { list } from "../../store/menu";
import Menu from "../../components/Nav/Menu";

const Nav = () => {
  const { menu } = useSelector((state: RootState) => state);

  return (
    <Container>
      <ul>
        {
          list.map(item => <Menu key={item}>{item}</Menu>)
        }
      </ul>
    </Container>
  )
}

export default Nav;

const Container = styled.nav`
  width: 15vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgba(0, 0, 0, .1);
  /* display: none; */
`
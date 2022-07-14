import styled from 'styled-components';
import { playList } from '../../../utils/utils';
import { useNavigate } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from 'react';

const SubMenu = () => {
  const navigate = useNavigate();

  return (
    <Container>
      {
        playList.map(item => <Menu key={item.idx} path={item.name}>{item.name}</Menu>)
      }
    </Container>
  )
}

export default SubMenu;

const Container = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 1.2rem;
  letter-spacing: 3px;
`
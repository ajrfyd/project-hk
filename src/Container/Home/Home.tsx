import { useState, useEffect } from 'react';
import styled from "styled-components";
import Notification from "../../components/Notification/Notification";
import { commonContainerStyle } from '../../Style/styles';

type HomeProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = () => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return (
    <Container>
      <Parall1 style={{ transform: `translateX(${-position}px)` }}>
        즐기며 성장하는 개발자 이홍경 입니다. 
      </Parall1>
      <Parall2 style={{ transform: `translateX(${position}px)` }}>
        즐거운 코딩으로 행복을 추구합니다.
      </Parall2>
      <Parall3 style={{ opacity: (position - 500) / 50 }}>
        어제보다 나은 오늘의 개발자가 되기 위해 노력합니다.
      </Parall3>
      <Notification />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  ${commonContainerStyle};
  width: 100%;
  /* overflow: hidden; */
  min-height: 2000px;
`

const Parall1 = styled.h1`
  font-size: 80px;
  position: absolute;
  left: 40%;
`

const Parall2 = styled.h1`
  font-size: 80px;
  position: absolute;
  right: 50%;
  top: 500px;
`

const Parall3 = styled.h1`
  font-size: 80px;
  position: absolute;
  text-align: center;
  top: 50%;
  opacity: 1;
  transition: .3s;
`
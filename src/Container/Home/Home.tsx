import { useState, useEffect } from 'react';
import styled from "styled-components";
import Notification from "../../components/Notification/Notification";
import { commonContainerStyle, commonParallStyle } from '../../Style/styles';

type HomeProps = {
  // visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


const Home = ({ setVisible }: HomeProps) => {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
    if(window.scrollY === 0) {
      setVisible(true);
    } else {
      setVisible(false);
    }
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
  overflow: hidden;
  min-height: 2000px;
  /* height: 100%; */
`

const Parall1 = styled.h1`
  ${commonParallStyle};
  position: relative;
  top: 10%;
  left: 60%;
`

const Parall2 = styled.h1`
  ${commonParallStyle};
  position: absolute;
  right: 60%;
  top: 500px;
`

const Parall3 = styled.h1`
  ${commonParallStyle};
  position: relative;
  text-align: center;
  top: 50%;
  opacity: 1;
  transition: .3s;
`
import { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import Notification from "../../components/Notification/Notification";
import { commonContainerStyle, commonParallStyle } from '../../Style/styles';
import { CgChevronDoubleDown } from 'react-icons/cg';

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
      <ScrollDownContainer style={{ transform: `translateX(${position}px)`}}>
        <span>Scroll Down</span>
        <CgChevronDoubleDown/>  
      </ScrollDownContainer>
      <Parall1 style={{ transform: `translateX(${-position}px)`, opacity: (position) / 50 }}>
        개발을 즐기며 성장하는 <span>이홍경</span> 입니다. 
      </Parall1>
      <Parall2 style={{ transform: `translateX(${position}px)`, opacity: (position - 100) / 50 }}>
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

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translate(0);
  }
`

const Container = styled.div`
  ${commonContainerStyle};
  width: 100%;
  overflow: hidden;
  min-height: 2000px;
  /* height: 100%; */
`

const ScrollDownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: .5rem;
  margin-top: 2rem;

  span {
    font-weight: bold;
    font-size: 2rem;
  }

  svg {
    font-size: 1.5rem;
    transition: .1s;
    animation: ${bounce} 1s infinite;
  }
`

const Parall1 = styled.h1`
  ${commonParallStyle};
  position: relative;
  top: 10%;
  left: 60%;
  
  span {
    color: #000;
    letter-spacing: 5px;
    font-size: 60px;
    border-bottom: 5px dotted #ddd; 
  }
`

const Parall2 = styled.h1`
  ${commonParallStyle};
  position: absolute;
  right: 60%;
  top: 500px;
  opacity: 1;
`

const Parall3 = styled.h1`
  ${commonParallStyle};
  position: relative;
  text-align: center;
  top: 50%;
  opacity: 1;
  transition: .3s;
`
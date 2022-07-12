import { useState, useEffect } from 'react';
import styled, { keyframes } from "styled-components";
import { commonContainerStyle, commonParallStyle } from '../../Style/styles';
import { CgChevronDoubleDown } from 'react-icons/cg';
import{ IoMdRocket } from 'react-icons/io';

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

  const scrollTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
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
        <span>프론트엔드</span> 개발에 흥미가 있습니다.
      </Parall2>
      <Parall3 style={{ opacity: (position - 500) / 50}}>
        새로운 시도를 두려워 하지 않습니다.
      </Parall3>
      <Parall4 style={{ opacity: (position - 900) / 50 }}>
        어제보다 나은 오늘의 개발자가 되기 위해 노력합니다.
      </Parall4>
      <ScrollUpContainer onClick={scrollTop} style={{ opacity: (position - 900) / 90}}>
        <IoMdRocket/> 
      </ScrollUpContainer>
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

const ScrollUpContainer = styled.button`
  position: fixed;
  border: none;
  outline: none;
  background-color: inherit;
  font-size: 2rem;
  cursor: pointer;
  color: red;
  right: 10px;
  bottom: 10px;
  opacity: 1;
  transition: .2s;

  &:hover {
    transform: translateY(10px);
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
  top: 600px;
  opacity: 1;

  span {
    color: dodgerblue;
  }
`

const Parall3 = styled.h1`
  ${commonParallStyle};
  position: relative;
  top: 40%;
  /* left: 60%; */
  text-align: right;
  opacity: 1;
`

const Parall4 = styled.h1`
  ${commonParallStyle};
  position: relative;
  text-align: center;
  top: 60%;
  opacity: 1;
  transition: .3s;
`
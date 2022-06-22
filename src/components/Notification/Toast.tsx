import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

type ToastProps = {
  text: string;
  disappearTime: number;
}

type ConProps = {
  isFading: boolean;
}

const Toast = ({ text, disappearTime }: ToastProps) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    setTimeout(() => {
      if(isMounted) {
        setIsFading(true);
      }
    }, disappearTime - 500);

    return () => {
      isMounted = false;
    }
  }, [])

  return (
    <Container className={isFading ? 'fadeOut' : ''}>
      { text }
    </Container>
  )
}

export default Toast;

const fadeInLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0)
  }
`

const Container = styled.div`
  color: #fff;
  background: #6200ee;
  opacity: .9;
  box-shadow: 0 0 8px rgba(255, 255, 255, .8);
  animation-name: ${fadeInLeft};
  animation-duration: .6s;
  transition: .3s ease;
  padding: .5rem 1rem;
  border-radius: 4px;
  margin: 1rem 0;

  &.fadeOut {
    opacity: 0;
    transform: opacity 2s;
  }
`
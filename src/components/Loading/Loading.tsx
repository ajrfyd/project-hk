import styled, { keyframes } from 'styled-components';

type SpanProp = {
  num: number;
} 

const Loading = () => {
  const deg = Array.from(new Array(20), (_, idx) => idx);

  return (
    <Container>
      <Circle>
        {
          deg.map((item, idx) => <Span key={idx} num={item}/>)
        }
      </Circle>
      <Circle>
        {
          deg.map((item, idx) => <Span2 key={idx} num={item}/>)
        }
      </Circle>
    </Container>
  )
}

export default Loading;

const animate = keyframes`
  0% {
      transform: scale(.6);
    }
    50%, 100% {
      transform: scale(.1);
    }
`

const aniColor = keyframes`
  0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  animation: ${aniColor} 1s linear infinite;

  & div:nth-child(2) {
    transform: rotate(-180deg);
  }
`

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 -7.5px;
`

const Span = styled.span<SpanProp>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * ${({num}) => num}));

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: calc(50% - 7.5px);
    width: 15px;
    height: 15px;
    background-color: #00ff0a;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff0a,
    0 0 20px #00ff0a,
    0 0 40px #00ff0a,
    0 0 60px #00ff0a,
    0 0 80px #00ff0a,
    0 0 100px #00ff0a;
    transform: scale(.1);
    animation: ${animate} 1s linear infinite;
    animation-delay: calc(0.025s * ${({num}) => num});
  }
`

const Span2 = styled.span<SpanProp>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * ${({num}) => num}));

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: calc(50% - 7.5px);
    width: 15px;
    height: 15px;
    background-color: #00ff0a;
    border-radius: 50%;
    box-shadow: 0 0 10px #00ff0a,
    0 0 20px #00ff0a,
    0 0 40px #00ff0a,
    0 0 60px #00ff0a,
    0 0 80px #00ff0a,
    0 0 100px #00ff0a;
    transform: scale(.1);
    animation: ${animate} 1s linear infinite;
    animation-delay: calc(-0.025s * ${({num}) => num});
  }
`
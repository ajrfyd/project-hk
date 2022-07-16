import styled from "styled-components";
import { lazy, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type CardProps = {
  id: string;
  name: string
}

const Image = lazy(() => import('./Img'));

const Card = ({ id, name }: CardProps) => {

  return (
    <Container>
      <LazyLoadImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
      {/* <Suspense>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
      </Suspense> */}
      <p>{name}</p>
    </Container>
  )
}

export default Card;

const Container = styled.div`
  text-align: center;
  padding: 1rem 0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .4);
  
  &:hover {
    transform: scale(1.01);
  }

  p {
    font-weight: bold;
    font-size: 1.5rem
  }
`
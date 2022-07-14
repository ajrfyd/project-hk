import styled from 'styled-components';
import { commonContainerStyle } from "../../../Style/styles";
import Loading from '../../Loading/Loading';
import { useInfiniteQuery } from 'react-query';



const PlayGround1 = () => {
  console.log('playground')
  return (
    <Container>
    </Container>
  )
}

export default PlayGround1;

const Container = styled.div`
  ${commonContainerStyle};
`
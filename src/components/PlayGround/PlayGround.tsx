import styled from 'styled-components';
import { commonContainerStyle } from "../../Style/styles";


const PlayGround = () => {
  console.log('playground')
  return (
    <Container>
      Hello PlayGround??
    </Container>
  )
}

export default PlayGround;

const Container = styled.div`
  ${commonContainerStyle};
`
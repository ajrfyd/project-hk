import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { commonContainerStyle } from "../../../../Style/styles";

const Infinite = () => {
  const location = useLocation();


  return (
    <Container>
      Hello Infinite??
    </Container>
  )
}

export default Infinite;

const Container = styled.div`
  ${commonContainerStyle};
`
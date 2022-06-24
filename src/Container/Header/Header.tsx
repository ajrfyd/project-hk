import styled from "styled-components";

const Header = () => {

  return (
    <Container>
      <h1>About HK</h1>
    </Container>
  )
}

export default Header;

const Container = styled.header`
  height: 10vh;
  box-shadow: 1px 0 5px rgba(0, 0, 0, .2); 
`
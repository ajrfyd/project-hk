import styled from "styled-components";
import TypeIt from "typeit-react";

const Header = () => {

  return (
    <Container>
      <TypeIt
        // options={{
        //   loop: true,
        //   waitUntilVisible: true,
        //   deleteSpeed: 500,
        //   lifeLike: true,
        //   // cursor: false
        //   // cursorChar: ''
        // }}
        getBeforeInit={(instance: any) => {
          instance.options({ loop: true, lifeLike: true, deleteSpeed: 500 }).pause(750).type('About HK....').pause(750).delete(2).pause(500).type('..').delete().pause(500).go();
          return instance;
        }}
      />
    </Container>
  )
}

export default Header;

const Container = styled.header`
  height: 10vh;
  box-shadow: 1px 0 5px rgba(0, 0, 0, .2); 
  display: flex;
  justify-content: space-around;
  align-items: center;

  span {
    font-size: 4rem;
    font-weight: bold;
  }
`
import { commonContainerStyle } from "../../Style/styles";
import styled from "styled-components";
import { playList } from "../../utils/utils";

const PlayGround = () => {

  console.log('%cplayground State', 'color: red');
  return (
    <Container>
      <h1>- PlayGround List -</h1>
      <ul>
        {
          playList.map((list) => <li key={list.idx}>{list.name}</li>)
        }
      </ul>
    </Container>
  )
}

export default PlayGround;

const Container = styled.div`
  ${commonContainerStyle};
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 5px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
    margin-top: 5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  li {
    font-size: 2rem;
    list-style: '*'
  }
`
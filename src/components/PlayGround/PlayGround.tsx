import { commonContainerStyle } from "../../Style/styles";
import styled from "styled-components";
import { playList } from "../../utils/utils";

const PlayGround = () => {

  console.log('%cplayground State', 'color: red');
  return (
    <Container>
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

  li {
    font-size: 2rem;
    list-style: '*'
  }
`
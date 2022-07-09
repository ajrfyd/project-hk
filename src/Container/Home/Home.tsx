import styled from "styled-components";
import Notification from "../../components/Notification/Notification";
import { commonContainerStyle } from '../../Style/styles';

type HomeProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = () => {

  return (
    <Container>
      <h1>
        즐기며 성장하는 개발자 이홍경 입니다. 
      </h1>
      
      <Notification />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  ${commonContainerStyle};
`
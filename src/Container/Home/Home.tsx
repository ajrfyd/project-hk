import styled from "styled-components";
import { notify as noti } from '../../store/notify';
import { useDispatch } from 'react-redux';
import Notification from "../../components/Notification/Notification";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      Hello Home??
      <button
        onClick={() => {  
          dispatch(noti('Notification'));
        }}
      >
        click
      </button>
      <Notification />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  
`
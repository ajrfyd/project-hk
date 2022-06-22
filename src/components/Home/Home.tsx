import styled from "styled-components";
import { notify as noti } from '../../store/notify';
import { useDispatch } from 'react-redux';
import Notification from "../Notification/Notification";

const Home = () => {
  const dispatch = useDispatch();


  return (
    <Container>
      Hello Home??
      <button
        onClick={() => {  
          dispatch(noti('wow'));
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
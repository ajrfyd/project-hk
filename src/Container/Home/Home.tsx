import styled from "styled-components";
// import { notify as noti } from '../../store/notify';
import { useDispatch, useSelector } from 'react-redux';
import Notification from "../../components/Notification/Notification";
import { useActions } from "../../store/hooks/useActions";
import { goHome, goProfile, goPlayGround } from "../../store/menu";
import { RootState } from '../../store/index';

const Home = () => {
  const dispatch = useDispatch();
  const { notify } = useActions();

  return (
    <Container>
      Hello Home??
      <button
        onClick={() => {  
          // dispatch(noti('Notification'));
          notify('Notification');
        }}
      >
        click
      </button>
      <button onClick={() => dispatch(goHome())}>
        home
      </button>
      <button onClick={() => dispatch(goProfile())}>
        profile
      </button>
      <button onClick={() => dispatch(goPlayGround())}>
        playground
      </button>
      <Notification />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  
`
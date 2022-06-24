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
      홈에 오신것을 환영합니다!
      <button
        onClick={() => {  
          // dispatch(noti('Notification'));
          notify('Notification');
        }}
      >
        Notification
      </button>
      <Notification />
    </Container>
  )
}

export default Home;

const Container = styled.div`
  width: 100%;
  height: 90vh;
`
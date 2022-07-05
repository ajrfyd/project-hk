import styled from "styled-components";
// import { notify as noti } from '../../store/notify';
import { useDispatch, useSelector } from 'react-redux';
import Notification from "../../components/Notification/Notification";
import { useActions } from "../../store/hooks/useActions";
import { goHome, goProfile, goPlayGround } from "../../store/menu";
import { RootState } from '../../store/index';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from 'react-icons/bs';

type HomeProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home = ({ visible, setVisible }: HomeProps) => {
  const dispatch = useDispatch();
  const { notify } = useActions();

  return (
    <Container>
      <VisibleBtn onClick={() => setVisible(visible => !visible)}>
        {
          visible ? <BsBoxArrowInLeft /> : <BsBoxArrowInRight />
        }
      </VisibleBtn>
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
  position: relative;
  width: 100%;
  height: 90vh;
  padding: 1rem 2rem;
`

const VisibleBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 1s;
`
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from '../../store/index';
import Toast from './Toast';

const Notification = () => {
  const { notify } = useSelector((state: RootState) => state);
  
  return (
    <Container>
      {
        notify.notification.map(item => <Toast key={item.uuid} text={item.msg} disappearTime={item.disappearTime}/> )
      }
    </Container>
  )
}

export default Notification;

const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 10px;
  z-index: 99999999;
`
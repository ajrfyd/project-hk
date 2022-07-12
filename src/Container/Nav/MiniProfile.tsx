import styled from "styled-components";

const MiniProfile = () => {

  return (
    <Container>
      <ProfileContainer>
        <Profile />
        <span>My name is HongKyeong Lee</span>
      </ProfileContainer>
    </Container>
  )
}

export default MiniProfile;

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  margin: 4rem 0;
  padding: 3rem 2rem;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Profile = styled.img`
  border: 3px solid #ddd;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
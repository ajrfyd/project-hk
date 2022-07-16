import styled from "styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from '../../components/Loading/Loading';
import { GithbProfile } from './types';

type Profile = {
  url: string;
};

const MiniProfile = () => {

  const getProfile = async (): Promise<GithbProfile> => {
    const { data } = await axios.get(`${process.env.REACT_APP_GITHUB_URL}`);
    return data;
  };

  const { data, status, isLoading } = useQuery('getProfile', getProfile, {
    refetchOnWindowFocus: false,
  });

  if(!data) return null;

  return (
    <Container>
      <ProfileContainer>
        {
          isLoading && <Loading />
        }
        <Profile src={data.avatar_url}/>
        <span>{data.bio}</span>
      </ProfileContainer>
    </Container>
  )
}

export default MiniProfile;

const Container = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  margin: 3rem 0;
  padding: 3rem 2rem;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`

const Profile = styled.img`
  border: 3px solid #ddd;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
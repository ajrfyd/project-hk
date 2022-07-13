import styled from "styled-components";
import { commonContainerStyle } from "../../Style/styles";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import axios from "axios";
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';

const Profile = () => {
  const address = `https://notion-api.splitbee.io/v1/page/${process.env.REACT_APP_NOTION_ID}`;

  const getNotionData = async () => {
    const { data } = await axios.get(address);
    return data;
  };
  const { data, status } = useQuery('getNotionData', getNotionData);

  if(status === 'error') return null;
  if(status === 'loading') return <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><Loading /></div>

  return (
    <Container>
      <NotionRenderer blockMap={data} />
    </Container>
  )
}

export default Profile;

const Container = styled.div`
  ${commonContainerStyle};
  height: 100%;
  overflow: scroll;
  display: flex;
  justify-content: center;
`
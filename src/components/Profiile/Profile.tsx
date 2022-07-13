import { useState, useEffect } from 'react';
import styled from "styled-components";
import { commonContainerStyle } from "../../Style/styles";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
import { NotionRenderer } from "react-notion";
import axios from "axios";

const Profile = () => {
  const address = `https://notion-api.splitbee.io/v1/page/${process.env.REACT_APP_NOTION_ID}`;
  const [data, setData] = useState({});

  const getNotionData = async () => {
    const { data } = await axios.get(address);
    setData(data);
  };

  useEffect(() => {
    getNotionData();
  }, [])

  console.log(data);
  
  return (
    <Container>
      <NotionRenderer blockMap={data}/>
    </Container>
  )
}

export default Profile;

const Container = styled.div`
  ${commonContainerStyle};
  height: 100%;
  overflow: scroll;
`
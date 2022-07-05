import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/Home';
import Header from './Container/Header/Header';
import Nav from './Container/Nav/Nav';
import styled from 'styled-components';
import Profile from './components/Profiile/Profile';

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <Header />
      <Body >
        <Nav visible={visible} />
        <Routes>
          <Route path='/' element={<Home visible={visible} setVisible={setVisible}/>}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </Body>
    </div>
  );
}

export default App;

const Body = styled.div`
  display: flex;
  flex: 1;
`
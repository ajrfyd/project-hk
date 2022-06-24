import { Route, Routes } from 'react-router-dom';
import Home from './Container/Home/Home';
import Header from './Container/Header/Header';
import Nav from './Container/Nav/Nav';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;

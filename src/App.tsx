import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import menuReducer from './store/menu';
import { RootState } from './store/index';
import { goHome, goProfile } from './store/menu';

const App = () => {
  const { menu } = useSelector((state:RootState) => state);
  const { home, profile } = menu;
  const dispatch = useDispatch();


  console.log(menu);

  return (
    <div>
      
      <button
        onClick={() => {
          if(home) dispatch(goProfile())
          else dispatch(goHome())
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;

### Project HK

> TypeScript 에서는 객체의 키로 string을 허용하지 않는다고 함.
반드시 string literal type의 key로 접근 index signature를 선언해 줘야 함.

```js
  // 이런 객체가 있다면 
  const initialState: StateType = {
    home: true,
    profile: false,
  }

  // index signature를 선언
  type StateKeyType = {
    [key: string]: boolean;
  } 

  type DirType = 'home' | 'profile'

  const func = (state: DirT, type: DirType)=> {
    const newState = { ...state };

    for(const key in newState) {
      if(key === type) newState[key] = true;
      else newState[key] = false;
    }
    return newState;
    } 
    
  func(initialState, 'home');
``` 


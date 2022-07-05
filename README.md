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

> Error log
에러메세지 : Type 'Dispatch<SetStateAction<boolean>>' is not assignable to type
setState boolean값을 변경할 때 파라미터를 설정해 줘야 한다.
```js
  type ChildProps = {
    setState: (state: boolean) => void;
  }
```
위의 방식대로 하면 setState(prev => !prev)가 작동하지 않는다. 
```js
  type ChildProps = {
    setState: React.Dispatch<React.SetState<boolean>>
  };
  // 이렇게 설정해 주면 동작한다.
```

> ### 메뉴
- home(parallax??)
- profile(로그인 후 민감정보 열람)
- playground

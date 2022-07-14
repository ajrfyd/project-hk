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

> Page에 Notion 넣는 방법 
- npm i react-notion
- 상단에 3가지 import
- 주소로 데이터 요청하여 
- NotionRenderer에 blockMap이라는 prop으로 넘겨준다.

```js
  import "react-notion/src/styles.css";
  import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting
  import { NotionRenderer } from "react-notion";
  // 주소 + notion의 url 주소 뒷부분이 Notion id이다.
  const address = `https://notion-api.splitbee.io/v1/page/${process.env.REACT_APP_NOTION_ID}`;
  <NotionRenderer blockMap={data} fullPage={true}/>

  
```
> Channel Talk 연동
>
[참고](https://mingeesuh.tistory.com/entry/NextJS-%EC%B1%84%EB%84%90%ED%86%A1-Script-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0)

> ### 메뉴
- home(parallax??)
- profile(로그인 후 민감정보 열람)
- playground

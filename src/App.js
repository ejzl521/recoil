import React, {useState, useRef} from "react";
import {useRecoilValue, useRecoilState} from "recoil";
import {addCountState, countState, tokenState} from "./recoil/store";
const App = () => {
  const [num, setNum] = useState(0)
  const [count, setCount] = useRecoilState(countState)
  const multiCount = useRecoilValue(addCountState(num))
  const [token, setToken] = useRecoilState(tokenState)
  return(
    <React.Fragment>
      <h1>atom: {count}</h1>
      <h1>count: {multiCount}</h1>
      <input
        onChange={(e)=>(setNum(e.target.value))}/>
      <span>count에 더하기</span>
      <h1>localStorage: {token}</h1>
      <input onChange={(e)=>{setToken(e.target.value)}}/>
      <span>localStorage 값 바꾸기</span>
    </React.Fragment>
  )
}

export default App;
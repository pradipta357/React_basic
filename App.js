import React, { useState } from 'react'

const App = () => {
  let[c,setC]=useState(55)
  let[m,setM]=useState(0)
  let[iid,setIid]=useState(-1)
  let inc=()=>{
    setC((c)=>{
      if(c==59){
        setM((m)=>m+1)
        return 0
      }
      else{
        return c+1
      }
    })
  }
  
  let st=()=>{
    if(iid==-1)
    {
      setIid(setInterval(inc,1000))
    }
  }

  let stop=()=>{
    clearInterval(iid)
    setIid(-1)
  }

  let rs=()=>{
    clearInterval(iid)
    setIid(-1)
    setC(0)
    setM(0)
  }

  return (
    <div>
      <div>{m<10?"0"+m:m}:{c<10?"0"+c:c}</div>
      <button onClick={st}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={rs}>Reset</button>
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import Greeting from './Greeting';

export default function App() {
  //let name="gamana";
  const[name,setName]=useState("Gamana");
  const[color,setColor]=useState("red");
  const[count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1);
    },1000)
  });
  return (
    <div>
      <Greeting name={name} />
      <button onClick={()=>setName("Chandu")}>click for change</button>
      <h2>my fav color is {color}</h2>
      <button onClick={()=>setColor("Black")}>change color</button>
      <h2>the count is {count}</h2>
      <button onClick={()=>setCount(count+1)}>count</button>
      <h1>the time starts now{count}</h1>
      
    </div>
  );
}

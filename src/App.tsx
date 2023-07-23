import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./about"

const data : string[] = ["a","b","c","d"];


function App() {
  const [count, setCount] = useState(0)
  const [state,setState] = useState<String>("test");
  return (
    <div className = "main">
      <h1>hello react</h1>
      <About data={data} func={setState}/>
      <h1>{state}</h1>
      <input onClick={(e) => setState(state + e.target.value)} />
      {/*data.map((item, idx) =>(
        <h4 key= {idx}>{item}</h4> 
      ))*/}

      {/*data.map((item, idx) =>
      {
        return <h4 key={idx}>{item}</h4> //มีการใช้{}กับreturn
      })*/}

    </div>
  );
}

export default App

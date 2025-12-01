import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter] = useState(0)
  //let counter =4

  const addValue = () =>{
    // console.log("Value Added ", Math.random());
    counter =counter+1
    if(counter > 20)
      counter =0
    console.log(counter)
    setCounter(counter);
  }

  const removeValue = () => {
    counter = counter -1
    if(counter <0)
      counter =0
    setCounter(counter)
  }


  return (
    <>
      <h1>Anil Kumar Adapa</h1>
      <h2>Counter Value : {counter}</h2>
     
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

    </>
  )
}

export default App

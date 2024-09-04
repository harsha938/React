import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  const [counter,setCounter] = useState(15)         //counter is variable and setCounter is function and useState() has the initial value of the counter variable

  const addValue = () =>
  {
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }
  const removeValue = () =>
  {
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    setCounter((prevCounter) => prevCounter-1)
    // setCounter(counter-1)
  }

  return (
    <>
      <h1>Counter Value : {counter}</h1>
      <button
      onClick={addValue}>Add Value</button>{" "}
      <button
      onClick={removeValue}>Remove Value</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

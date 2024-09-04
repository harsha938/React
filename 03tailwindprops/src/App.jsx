import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myArr = [1,2,3,4,5,6];
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3  rounded-lg'>Vite with Tailwind</h1>
      <Card username="Harsha" post='Staff Engg.' arr={myArr}/>
      <Card username=' Vardhan ' post=' SDE '/>
      <Card />
      <Card />
    </>
  )
}

export default App

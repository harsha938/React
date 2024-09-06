import { useState,useEffect,useRef } from 'react'
import './App.css'
import { useCallback } from 'react'

function App() {
  const [len,setLen] = useState(6)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setpassword] = useState('')

  const passwordRef = useRef(null)

  const generatepassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKPLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*.()+_"

    for(let i = 0;i<len ;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length+1))
    }

    setpassword(pass)
  },[len,numberAllowed,charAllowed])

  useEffect(() => {
    generatepassword()
  }, [len,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-4 my-8 bg-gray-400 text-black'>
        <h1 className='text-black text-center my-3'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly 
          ref={passwordRef} />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none  bg-gray-900 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2 mrx-10'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min = {0}
            max = {20}
            value = {len}
            className='cursor-pointer'
            onChange={(e) => setLen(e.target.value)} 
            name = ""
            id = ""
            />
            <label htmlFor="length">Length: {len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>{setNumberAllowed((prev) => !prev)}}
            name=""
            id=""
             />
             <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{setCharAllowed((prev) => !prev)}}
            name=""
            id=""
             />
             <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

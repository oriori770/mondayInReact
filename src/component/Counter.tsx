import React,{useRef} from 'react'

const Counter = () => {
    const numCounter = useRef<HTMLDivElement>(null)
  return (
    <>  
    <div>Counter</div>
    <div ref={numCounter}>10</div>
    <button onClick={() => {if(numCounter.current) {numCounter.current.textContent = (Number(numCounter.current.textContent) + 1).toString()}}}>add</button>
    <button onClick={() => {if (numCounter.current) {numCounter.current.textContent = "0"}}}>reset</button>
    </>
  )
}

export default Counter
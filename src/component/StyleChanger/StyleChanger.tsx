import React, { useRef } from 'react'
import style from './StyleChanger.module.css'

const StyleChanger = () => {
    const boxOne = useRef<HTMLDivElement>(null)
    const boxTow = useRef<HTMLDivElement>(null)
  return (
    <>  
        <div className={style.boxTow} ref={boxTow}>אני ריבוע כחול</div>
        <br />  
        <div className={style.boxOne} ref={boxOne}>אני ריבוע אדום</div>
        <br />
        <button onClick={() => {if (boxOne.current&&boxTow.current) {boxOne.current.style.backgroundColor = "white"; boxTow.current.style.backgroundColor = "white"}}}>change style to wihth</button>
        <button onClick={() => {if (boxOne.current&&boxTow.current) {const temp:string|null = boxOne.current.textContent; boxOne.current.textContent = boxTow.current.textContent; boxTow.current.textContent = temp;}}}>switch the text</button>
    </>
  )
}

export default StyleChanger
import { useState } from "react"
import React from 'react'
import styles from "./Colorcard.module.css"
const colorArr = [
    "red",
    "blue",
    "green",
    "gray",
    "black",
    "orange",
    "yellow",
    "violet",
    "purple",
    "pink"
]
export const Colorcard = () => {
    const initialColor = colorArr[Math.floor(Math.random() * colorArr.length)];

const [cardColor,setCardColor]=useState(initialColor)
const handleColor=()=>{
    const randomColor=Math.floor(Math.random()*colorArr.length)
    setCardColor(colorArr[randomColor])
}


  return (
    <div>
        <button style ={{backgroundColor:cardColor}} className={ styles.divBg} onClick={handleColor} ></button>
    </div>
  )
}


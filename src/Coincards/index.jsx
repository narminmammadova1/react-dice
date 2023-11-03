import styles from "./Coincards.module.css"
import { useState } from 'react';
import React from 'react'; // You don't need to import React separately in modern React projects
import { Button } from '../Button';

const coin1 = "/Images/coin1.png";
const coin2 = "/Images/coin2.png";

export const Coincards = () => {
  const [showCoin, setShowCoin] = useState(true);
  const [showText, setShowText] = useState();
const [front,setFront]=useState(0)
const [back,setBack]=useState(0)
  const handleClick = () => {
    setShowCoin(!showCoin);
    if(showCoin){  setFront(front+1)
        }
    else{setBack(back+1) 
       }
   
    setShowText(`cemi ${front + back}, onhisse ${front}, arxahisse ${back}`);


}
  

  return (
    <div>
      <h2>COIN GAME</h2>
      {showCoin ? (
        <img width={200} src={coin1} alt="" />
      ) : (
        <img width={200} src={coin2} alt="" />
      )}
<p>{showText}</p>
      <Button title="Flip Me" onClick={handleClick} />
    </div>
  );
}
import React, { useState } from 'react';
import  {Button}  from '../Button';
import styles from "./Dicecards.module.css"
const Dice1 = "/Images/1.png";
const Dice2 = "/Images/2.png";
const Dice3 = "/Images/3.png";
const Dice4 = "/Images/4.png";
const Dice5 = "/Images/5.png";
const Dice6 = "/Images/6.png";

const ImgObj = {
  dice1: Dice1,
  dice2: Dice2,
  dice3: Dice3,
  dice4: Dice4,
  dice5: Dice5,
  dice6: Dice6
};

export const Dicecards = () => {
  const [diceData, setDiceData] = useState({
    diceImg1: ImgObj.dice1,
    diceImg2: ImgObj.dice2
  });
  const [loading, setLoading] = useState(false);

  const handleRoll = () => {
    setLoading(true);

    setTimeout(() => {
      const num1 = Math.ceil(Math.random() * 6);
      const num2 = Math.ceil(Math.random() * 6);
      setDiceData({
        diceImg1: ImgObj[`dice${num1}`],
        diceImg2: ImgObj[`dice${num2}`]
      });

      setLoading(false);
    }, 1000);
  }

  return (
    <div>
      <h1>Dice Game</h1>
      <img className={styles.rolling} src={diceData.diceImg1} alt="Zar 1" />
      <img className={styles.rolling} src={diceData.diceImg2} alt="Zar 2" />
      <Button loading={loading} handleRoll={handleRoll} />

    </div>
  );
}

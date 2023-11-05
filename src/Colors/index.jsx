// import React from 'react'
// import { Colorcard } from '../Colorcard'
// export const Colors = () => {
// const cards=Array.from({length:10},(item,index)=>{
//     <Colorcard key={"cards"+index}/>
// })

//   return (
//     <div>
//        {/* <Colorcard  /> */}

//        {cards}
//     </div>
//   )
// }


import React from 'react';
import { Colorcard } from '../Colorcard';
import styles from "./Colors.module.css"
export const Colors = () => {
  
 
return (
    
    <div >
         <h2>Random Color</h2>
        <div className={styles.cardposition}>
       {[...Array(16)].map((_, index) => (
        <Colorcard key={`card+${index}`} />
      ))} 
     
      </div> 

    </div>
  );
};


  






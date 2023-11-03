import React from 'react'
import styles from "./Button.module.css"
export const Button = ({loading,title,onClick}) => {
  return (
    <div>
<button className={styles.btn}onClick={onClick}>
  {title}
</button>
    </div>
  )
}


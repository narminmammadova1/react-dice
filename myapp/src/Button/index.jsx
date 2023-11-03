import React from 'react'
import styles from "./Button.module.css"
export const Button = ({loading,handleRoll}) => {
  return (
    <div>
<button className={styles.btn} onClick={handleRoll} disabled={loading}>
  {loading ? "Rolling" : "Roll"}
</button>
    </div>
  )
}


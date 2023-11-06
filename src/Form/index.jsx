import { useState } from "react"
import React from 'react'
import styles from "./Form.module.css"
export const Form = () => {

  const [form,setForm]=useState({
    email:"",
    password:""
  })
const[data,setData]=useState([])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("form");
setData((prevData)=>[form,...prevData])
console.log("data",data);
setForm({email:"",
password:""})
}
  return (
    <div className={styles.form}>
        <h2>Create An Account </h2>
        <p>Create an account to enjoy all the services without any ads for free!</p>
      <form action=""  onSubmit={handleSubmit}>
        <div className={styles.inputDiv}>
        <input type="email" value={form?.email} onChange={handleChange} name="email" placeholder='Email Address'/>
        <input type="password" value={form?.password} onChange={handleChange}  name="password"  placeholder='Password'/>
        <button className={styles.btn} type='submit'>Create Account</button>
        </div>
      </form>
      <p>Already have an account?<span>Sign in</span></p>
      
    </div>
  )
}

export default Form

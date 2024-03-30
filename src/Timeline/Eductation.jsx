import React, { useContext, useEffect, useState } from 'react'
import { DataProvider } from '../ContextApi/Contextapi'
import styles from "./Education.module.css"
import CustomTimeline from './CustomTimeline'
const Eductation = () => {
  const {state}=useContext(DataProvider)
  const [education,seteducation]=useState([]);
  useEffect(()=>{
   let newarr=state?.data.timeline.filter((el)=>{
   return el.forEducation==true
   })
   seteducation(newarr)
  },[state?.data])
  console.log("education filter arr",education)
  return (
    
        <div>{
         education.length>0?<div className={styles.timeline}>
          {
            education.map((el)=><CustomTimeline data={el}/>)
          }
         </div>:<h2>Not able to get education details</h2>
        }</div>
   
  )
}

export default Eductation
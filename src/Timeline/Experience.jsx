import React, { useContext, useEffect, useState } from 'react'
import { DataProvider } from '../ContextApi/Contextapi'
import styles from "./Experience.module.css"
import CustomTimeline from './CustomTimeline'
const Experience = () => {
  const {state}=useContext(DataProvider)
  const [experience,setexperience]=useState([])
  useEffect(()=>{
    let newarr=state?.data?.timeline.filter((el)=>el.forEducation===false)
    setexperience(newarr)
  },[state?.data])
  console.log("experiences",experience)
 
  return (
   <section id="timeline">
            <div>{
         experience.length>0?<div className={styles.timeline}>
          {
            experience.map((el)=><CustomTimeline data={el}/>)
          }
         </div>:<h2>Not able to get education details</h2>
        }</div>
   </section>
  )
}

export default Experience
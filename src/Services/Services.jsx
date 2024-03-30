import React, { useContext, useEffect, useState } from 'react'
import Styles from "./Services.module.css"
import { DataProvider } from '../ContextApi/Contextapi'
import SingleServicebox from './SingleServicebox'
const Services = () => {
  const {state}=useContext(DataProvider)
  const [servicesarr,setservicesarr]=useState([])
  useEffect(()=>{
    let newarr=state?.data?.services.filter((el)=>el.enabled===true)
    setservicesarr(newarr)
  },[state?.data])
  return (
    <section id="services">
    <div className={Styles.maindivService}>
      <p className={Styles.headline}>Services</p>
      {
        servicesarr.length>0?<div className={Styles.flex_box}>{
          servicesarr?.map((el)=><SingleServicebox data={el}/>)
          }</div>:null
      }
    </div>
 </section>
  )
}

export default Services
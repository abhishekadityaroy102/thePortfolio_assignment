import React from 'react'
import styles from "./SingleServicebox.module.css"
const SingleServicebox = ({data}) => {
    console.log("services",data)
  return (
    <div className={styles.maindivSingleService}>
        <img src={data?.image?.url}></img>
        <p style={{fontWeight:"bolder"}}>{data?.name}</p>
        <p>{data?.desc}</p>
        <button>{data?.charge}</button>
    </div>
  )
}

export default SingleServicebox
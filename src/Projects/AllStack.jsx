import React, { useContext } from 'react'
import styles from "./AllStack.module.css"
import { DataProvider } from '../ContextApi/Contextapi'
const AllStack = () => {
    const {state}=useContext(DataProvider)
  return (
    <div className={styles.maindivAllStack}>
        {/* <b>Filter By : </b> */}
        {
            state?.data?.skills.map((el)=><button className={styles.skills_box}>
            <img src={el.image.url}></img>
            <span>{el.name}</span>
            </button>)
        }
    </div>
  )
}

export default AllStack
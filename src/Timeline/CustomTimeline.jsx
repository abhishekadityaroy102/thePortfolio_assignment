import React from 'react'
import styles from "./CustomTimeline.module.css"
import moment from 'moment'
const CustomTimeline = ({data}) => {
    const startDate=moment(data?.startDate);
    const endDate=moment(data?.endDate);
    const statrdate=startDate.format("Do MMM YYYY")
    const enddate=endDate.format("Do MMM YYYY")
  return (
    <div>
        {/* <div class="timeline"> */}
  <div className={styles.entry}>
    <div className={styles.title}>
      <h3>{`${statrdate} - ${enddate}`}</h3>
      <p>{data?.jobTitle}</p>
      <p>{data?.company_name}</p>
    </div>
    <div className={styles.body}>
      <p>{data?.summary}</p>
      {
        data?.bulletPoints?.length>0?<ul>{
            data?.bulletPoints.map((el)=><li>{el}</li>)}</ul>:null
      }
    {/* </div> */}
  </div>
 



</div>
    </div>
  )
}

export default CustomTimeline
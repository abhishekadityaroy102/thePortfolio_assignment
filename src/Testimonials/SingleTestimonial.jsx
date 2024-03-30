import React from 'react'
import Styles from "./SingleTestimonial.module.css"
const SingleTestimonial = ({data,isActive}) => {
  return (
    <div className={`${Styles.testimonial} ${isActive ? Styles.activeTestimonial:""}`}>
        
        <blockquote>
 {data?.review} <i><img src={data?.image.url}/>{data?.name}</i>
  <i>{data?.position}</i>
</blockquote>
    </div>
  )
}

export default SingleTestimonial
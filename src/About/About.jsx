import React, { useCallback, useContext } from 'react'
import Styles from "./About.module.css"
import { DataProvider } from '../ContextApi/Contextapi'
import AllStack from '../Projects/AllStack'
const About = () => {
  const {state}=useContext(DataProvider)
  console.log(state?.data.about)
  return (
    <section id="about">
       <div className={Styles.maindivA}>
       <div className={Styles.bgimg1} style={{backgroundImage:`url(${state?.data.about.avatar.url})`}}>
       {/* <img src={state?.data.about.avatar.url}></img> */}
       <div className={Styles.caption1}>
       <span>{state?.data.about.name}</span>
       </div>
       </div>
       <div>
       <h3 style={{textAlign:"start"}}>About me :-</h3>
       <p className={Styles.text_title}>{state?.data.about.title} <span>{`(${state?.data.about.exp_year} Years Experiences)`}</span></p>
       <p className={Styles.text_subtitle}>{state?.data.about.subTitle}</p>
       <p className={Styles.text_desc}>{state?.data.about.description}</p>
    
       </div>
       <div className={Styles.bgimg2} style={{backgroundImage:`url(${state?.data.about.alternateAvatars[0].url})`}}>
       <div className={Styles.caption1}>
       <span>{state?.data.about.quote}</span>
       </div>
       </div>
       </div>
    </section>
   
  )
}

export default About
import React, { useContext } from 'react'
import { DataProvider } from '../ContextApi/Contextapi'
import { MdLocationPin,MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Styles from "./Sidebar.module.css"
import Navbar from './Navbar';
const Sidebar = ({tooglemenu,settooglemenu}) => {
  const {state}=useContext(DataProvider)
  console.log("slidebar",state?.data)
  return (
    <div className={tooglemenu? Styles.maindivSidebarWithDisplay:Styles.maindivS} onClick={tooglemenu?()=>settooglemenu(!tooglemenu):()=>settooglemenu(false)}>
     {
      tooglemenu?  <ImCross className={Styles.crossmenubtn}/>:null
     }
     <img src={state?.data?.about.avatar.url}></img>
    <h3><span><BsFillPersonFill/></span>{state?.data?.about.name}</h3>
    <p>{state?.data?.about.title} <span>({state?.data?.about.exp_year} Years Exp)</span></p>
    <p><MdLocationPin/> <span>{state?.data?.about?.address}</span></p>
    <div>
      <Navbar/>
    </div>
    {/* <b>Contact</b> */}
    <p><FaPhoneAlt/> <span>{state?.data?.about?.phoneNumber}</span></p>
    <p><MdEmail/> <span>{state?.data?.email}</span></p>
    <div className={Styles.social_handles_box}>
      {
        state?.data?.social_handles.map((el)=><img src={el.image.url}/>)
      }
    </div>
    </div>
  )
}

export default Sidebar
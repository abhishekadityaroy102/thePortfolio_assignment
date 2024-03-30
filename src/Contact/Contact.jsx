import React, { useContext } from 'react'
import Styles from "./Contact.module.css"
import { DataProvider } from '../ContextApi/Contextapi'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { IoIosSend } from "react-icons/io";
const Contact = () => {
  const {state}=useContext(DataProvider)

  return (
    <section id="contact">
    <div className={Styles.maindivC}>
      <h3 className={Styles.headline}>Contact Me</h3>
      <div className={Styles.flex_contact_details}>
        <div>
          <MdPhone fontSize="26px"/><p>{state?.data?.about?.phoneNumber}</p>
        </div>
        <div><MdEmail fontSize="26px"/><p>{state?.data?.email}</p></div>
        <div><MdLocationOn fontSize="26px"/><p>{state?.data?.about?.address}</p></div>
      </div>
      <div className={Styles.form_box}>
        <form>
          <input placeholder='Enter Name' required></input>
          <input placeholder='Enter Email' required></input>
          <input placeholder='Enter Message' required></input>
          <button type="submit"> <IoIosSend fontSize="26px"/><span>Send Message</span></button>
        </form>
      </div>
    </div>
 </section>
  )
}

export default Contact
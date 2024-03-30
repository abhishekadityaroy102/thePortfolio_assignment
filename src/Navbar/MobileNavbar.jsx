import React, { useContext } from "react";
import { IoMdMenu } from "react-icons/io";
import styles from "./MobileNavbar.module.css"
import { DataProvider } from "../ContextApi/Contextapi";
const MobileNavbar = ({tooglemenu,settooglemenu}) => {
    const {state}=useContext(DataProvider)
  return (
    <div className={styles.maindivM}>
      <div className={styles.menubox}>
        <IoMdMenu  onClick={()=>settooglemenu(!tooglemenu)}/>
      </div>
      <div className={styles.avatarbox}>
        <img src={state?.data?.about.avatar.url}></img>
      </div>
    </div>
  );
};

export default MobileNavbar;

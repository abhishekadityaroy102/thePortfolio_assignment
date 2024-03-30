import React, { useContext, useState } from "react";
import { DataProvider } from "../ContextApi/Contextapi";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Timeline from "../Timeline/Timeline";
import styles from "./Dashboard.module.css"
import Testimonial from "../Testimonials/Testimonial";
import MobileNavbar from "../Navbar/MobileNavbar";
const Dashboard = () => {
  const { state } = useContext(DataProvider);
  console.log("state is ", state);
  const [tooglemenu,settooglemenu]=useState(false)
  
  return (
    <div>
      {
        state?.data&&state?.error==false&&state?.loading==false ? <div className={styles.maindivD}>
        <div className={styles.navbarwithmenu}>
          <MobileNavbar tooglemenu={tooglemenu} settooglemenu={settooglemenu}/>
        
        </div>
        <div className={styles.parentdiv2}>
         <div>
         <Sidebar tooglemenu={tooglemenu} settooglemenu={settooglemenu}/>
         </div>
          <div className={styles.acspt}>
          <About />
          <Projects />
          <Services />
          <Testimonial/>
          <Timeline />
          <Contact />
          </div>
        </div>
      </div>:<p>{
        state?.loading==false&&state?.error ? "Something went wrong! Please refresh page again":"Loading..."}</p>
      }
    </div>
  );
};

export default Dashboard;

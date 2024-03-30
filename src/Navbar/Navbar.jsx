import React from 'react'
import {HashLink} from "react-router-hash-link"
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.maindivN}>
        <ul>
            <li><HashLink  to="/#about">About</HashLink></li>
            <li><HashLink  to="/#projects">Projects</HashLink></li>
            <li><HashLink to="/#services">Services</HashLink></li>
            <li><HashLink  to="/#timeline">TimeLine</HashLink></li>
            <li><HashLink  to="/#contact">Contact</HashLink></li>
        </ul>
    </div>
  )
}

export default Navbar
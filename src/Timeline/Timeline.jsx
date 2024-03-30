import React from "react";
import Eductation from "./Eductation";
import Experience from "./Experience";
import Styles from "./Timeline.module.css";
const Timeline = () => {
  return (
    <section id="timeline">
    <div className={Styles.maindiv}>
     <div>
      <h3 className={Styles.headlines}>Education</h3>
     <Eductation />
     </div>

      <div>
        <h3 className={Styles.headlines}>Experience</h3>
      <Experience />
      </div>
    </div>
  </section>
  )
};

export default Timeline;

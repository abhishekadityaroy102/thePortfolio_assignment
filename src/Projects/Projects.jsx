import React, { useContext } from "react";
import Styles from "./Projects.module.css";
import { DataProvider } from "../ContextApi/Contextapi";
import Singleprojectdiv from "./Singleprojectdiv";
import AllStack from "./AllStack";
const Projects = () => {
  const { state } = useContext(DataProvider);

  return (
    <section id="projects">
      <div className={Styles.maindivP}>
     
       
        <div className={Styles.techskills_box}>
        <h4 className={Styles.tools_headline}>Technical SkillSet</h4>
        
        <AllStack/>
        <h3 className={Styles.project_headline}>My Projects</h3>
       </div>
      
        {state?.data?.projects.map((el) => (
          <Singleprojectdiv data={el} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

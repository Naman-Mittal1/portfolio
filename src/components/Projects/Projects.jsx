import React from "react";
import { projects } from "../../data/Project";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  let dir_counter = 0;

  return (
    <>
    <div className={styles.projectme}>
          <p className={`base-text text-secondary uppercase tracking-wider sm:text-[18px] text-[14px]`}>
            Contributed & Worked on
          </p>
          <h2 className={`experience-text text-white font-black xs:text-[40px] sm:text-[50px] md:text-[60px] text-[30px]`}>
            Projects..
          </h2>
    </div>
    <div className={styles.container}>
        {projects.map((project) => {
          dir_counter++;

          return (
            <ProjectCard
              {...project}
              direction={dir_counter % 2 === 0 ? "row-reverse" : "row"}
              key={dir_counter}
            />
          );
        })}
      </div>

      </>
  );
}

export default Projects;

import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
       <a href='https://packoa.com/'> <ProjectsCard
          title="PACKOA | Wordpress Divi"
          des=" Maroquinerie enthousiaste et responsable. Packoa: Une marque qui se distingue, entre modernité citadine et tradition made in Africa. Chez Packoa, chaque pièce est unique"
          src={projectOne}
        /></a>
       <a href='https://clubenergy.finance/'> <ProjectsCard
          title="CLUBENERGY | Bubble.io"
          des=" Find the best energy projects to finance.We are delighted that you are joining our directory of skills engaged in debt or equity financing."
          src={projectTwo}
        /> </a>
      
       <a href='https://destockcbd.com/'> <ProjectsCard
          title="DESTOCKCBD | WORDPRESS Elementor"
          des=" DestockCBD s'engage à répondre de manière personnalisée à toutes vos demandes ! Expédition depuis la France; Pour votre confort : des colis anonymisés!"
          src={projectThree}
        /> </a>
       
      </div>
    </section>
  );
}

export default Projects
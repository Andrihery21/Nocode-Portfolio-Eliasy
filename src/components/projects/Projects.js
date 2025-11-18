import React, { useState, useEffect } from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import monCercleImmo from "../../assets/images/projects/monCercleImmo.jpg";
import investAcademie from "../../assets/images/projects/investAcademie.jpg";
import manuelRavier from "../../assets/images/projects/manuelRavier.jpg";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // Vérifier s'il y a un hash dans l'URL au chargement
    if (window.location.hash) {
      const filter = window.location.hash.substring(1); // Enlever le #
      setActiveFilter(filter);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "PACKOA | Wordpress Divi",
      des: "Maroquinerie enthousiaste et responsable. Packoa: Une marque qui se distingue, entre modernité citadine et tradition made in Africa. Chez Packoa, chaque pièce est unique",
      src: projectOne,
      link: 'https://packoa.com/',
      category: 'wordpress'
    },
    {
      id: 2,
      title: "CLUBENERGY | Bubble.io",
      des: "Find the best energy projects to finance. We are delighted that you are joining our directory of skills engaged in debt or equity financing.",
      src: projectTwo,
      link: 'https://clubenergy.finance/',
      category: 'bubble'
    },
    {
      id: 3,
      title: "DESTOCKCBD | WORDPRESS Elementor",
      des: "DestockCBD s'engage à répondre de manière personnalisée à toutes vos demandes ! Expédition depuis la France; Pour votre confort : des colis anonymisés!",
      src: projectThree,
      link: 'https://destockcbd.com/',
      category: 'wordpress'
    },
    {
      id: 4,
      title: "MON CERCLE IMMO | WEBFLOW",
      des: "Mon Cercle Immo est une plateforme immobilière innovante offrant des solutions complètes pour l'achat, la vente et la location de biens immobiliers.",
      src: monCercleImmo,
      link: 'https://www.moncercleimmo.com/',
      category: 'webflow'
    },
    {
      id: 5,
      title: "INVEST ACADÉMIE | WEBFLOW",
      des: "Invest Académie est une plateforme d'éducation financière et d'investissement offrant des formations complètes pour les investisseurs de tous niveaux.",
      src: investAcademie,
      link: 'https://www.invest-academie.com/',
      category: 'webflow'
    },
    {
      id: 6,
      title: "MANUEL RAVIER | WEBFLOW",
      des: "Site vitrine professionnel pour Manuel Ravier, mettant en valeur son expertise et ses réalisations dans son domaine d'activité.",
      src: manuelRavier,
      link: 'https://www.manuelravier.com/',
      category: 'webflow'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // Mettre à jour l'URL avec le filtre
    window.location.hash = filter;
  };

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

      {/* Filtres */}
      <div className="flex justify-center mb-12 space-x-4">
        <button
          id="filter-all"
          onClick={() => handleFilterClick('all')}
          className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-designColor text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Tous les projets
        </button>
        <button
          id="filter-bubble"
          onClick={() => handleFilterClick('bubble')}
          className={`px-4 py-2 rounded-full ${activeFilter === 'bubble' ? 'bg-designColor text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Bubble.io
        </button>
        <button
          id="filter-webflow"
          onClick={() => handleFilterClick('webflow')}
          className={`px-4 py-2 rounded-full ${activeFilter === 'webflow' ? 'bg-designColor text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Webflow
        </button>
        <button
          id="filter-wordpress"
          onClick={() => handleFilterClick('wordpress')}
          className={`px-4 py-2 rounded-full ${activeFilter === 'wordpress' ? 'bg-designColor text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          WordPress
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {filteredProjects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <ProjectsCard
              title={project.title}
              des={project.des}
              src={project.src}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
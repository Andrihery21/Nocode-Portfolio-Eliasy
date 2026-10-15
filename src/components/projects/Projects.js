import React, { useState, useEffect } from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import monCercleImmo from "../../assets/images/projects/monCercleImmo.jpg";
import investAcademie from "../../assets/images/projects/investAcademie.jpg";
import manuelRavier from "../../assets/images/projects/manuelRavier.jpg";
import ProjectsCard from './ProjectsCard';

const simbaPreview = "https://simba-digital.ch/wp-content/uploads/2026/06/lion-glass-blue.png";
const trichozenPreview = "https://lh3.googleusercontent.com/d/1sE5y49dP5WQBrhmghhJaFrptPkRmTyEE";
const allianceHabitatPreview = "https://cdn.prod.website-files.com/69b1383587d7776c95ca6fd1/69cf6a413bd067df2216b1b2_Professional%20using%20tablet.webp";
const collaborationCapitalPreview = "https://cdn.prod.website-files.com/661409dfe48993b799562a91/6a68684e6b5909db38244cda_logo%20collaboration%20capital.png";
const autojustPreview = "https://framerusercontent.com/images/QjLR5rZJRR42SonVPsOoB60zYDM.webp?width=982";
const autojustAppPreview = "https://app.autojust.fr/lovable-uploads/846169ec-8a4f-4c69-8d22-b18bb867bd97.png";
const monCercleAppPreview = "https://ac9057afed139780042c65988cc373cb.cdn.bubble.io/cdn-cgi/image/w=,h=,f=auto,dpr=1,fit=contain/f1701958878875x950895513925943800/Thumbnail.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const filter = window.location.hash.substring(1);
    if (['bubble', 'webflow', 'wordpress', 'framer', 'lovable'].includes(filter)) {
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
    },
    {
      id: 7,
      title: "SIMBA DIGITAL | WORDPRESS",
      des: "Agence digitale spécialisée dans l’acquisition, la stratégie marketing et l’optimisation des campagnes publicitaires.",
      src: simbaPreview,
      link: 'https://simba-digital.ch/',
      category: 'wordpress'
    },
    {
      id: 8,
      title: "TRICHOZEN | WORDPRESS",
      des: "Site dédié à la trichologie fonctionnelle : diagnostics capillaires personnalisés, formations professionnelles et conseil.",
      src: trichozenPreview,
      link: 'https://www.trichozen.com/',
      category: 'wordpress'
    },
    {
      id: 9,
      title: "ALLIANCE HABITAT | WEBFLOW",
      des: "Plateforme d’intermédiation locative solidaire, avec loyers garantis et gestion locative complète pour les propriétaires.",
      src: allianceHabitatPreview,
      link: 'https://www.alliancehabitat.org/',
      category: 'webflow'
    },
    {
      id: 10,
      title: "COLLABORATION CAPITAL | WEBFLOW",
      des: "Cabinet indépendant de conseil en acquisition, cession et financement d’entreprise, actif à l’international.",
      src: collaborationCapitalPreview,
      link: 'https://www.collaborationcapital.org/',
      category: 'webflow',
      imageFit: 'contain'
    },
    {
      id: 11,
      title: "MON CERCLE IMMO | BUBBLE",
      des: "Application d’inscription à la plateforme Mon Cercle Immo, dédiée à l’investissement locatif et à la mise en relation avec des professionnels.",
      src: monCercleAppPreview,
      link: 'https://app.mci.moncercleimmo.com/register',
      category: 'bubble'
    },
    {
      id: 12,
      title: "AUTOJUST | FRAMER",
      des: "Site vitrine d’AutoJust, une plateforme d’inspection automobile avant achat pour aider les acheteurs à évaluer un véhicule d’occasion.",
      src: autojustPreview,
      link: 'https://www.autojust.fr/',
      category: 'framer'
    },
    {
      id: 13,
      title: "AUTOJUST RÉSERVATION | LOVABLE",
      des: "Application de réservation d’une inspection automobile chez le vendeur, avec contrôle complet, essai routier et rapport détaillé.",
      src: autojustAppPreview,
      link: 'https://app.autojust.fr/reserver?landing_page=https%3A%2F%2Fwww.autojust.fr%2F',
      category: 'lovable',
      imageFit: 'contain'
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
      className="w-full border-b-[1px]"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Sélection de réalisations"
          des="Projets récents"
        />
      </div>

      {/* Filtres */}
      <div className="project-filters">
        <button
          id="filter-all"
          onClick={() => handleFilterClick('all')}
          className={`project-filter ${activeFilter === 'all' ? 'is-active' : ''}`}
        >
          Tous les projets
        </button>
        <button
          id="filter-bubble"
          onClick={() => handleFilterClick('bubble')}
          className={`project-filter ${activeFilter === 'bubble' ? 'is-active' : ''}`}
        >
          Bubble.io
        </button>
        <button
          id="filter-webflow"
          onClick={() => handleFilterClick('webflow')}
          className={`project-filter ${activeFilter === 'webflow' ? 'is-active' : ''}`}
        >
          Webflow
        </button>
        <button
          id="filter-wordpress"
          onClick={() => handleFilterClick('wordpress')}
          className={`project-filter ${activeFilter === 'wordpress' ? 'is-active' : ''}`}
        >
          WordPress
        </button>
        <button
          id="filter-framer"
          onClick={() => handleFilterClick('framer')}
          className={`project-filter ${activeFilter === 'framer' ? 'is-active' : ''}`}
        >
          Framer
        </button>
        <button
          id="filter-lovable"
          onClick={() => handleFilterClick('lovable')}
          className={`project-filter ${activeFilter === 'lovable' ? 'is-active' : ''}`}
        >
          Lovable
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
          >
            <ProjectsCard
              title={project.title}
              des={project.des}
              src={project.src}
              imageFit={project.imageFit}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
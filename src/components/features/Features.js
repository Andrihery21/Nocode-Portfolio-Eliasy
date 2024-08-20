import React from 'react'
import { AiFillAppstore  } from "react-icons/ai";
import { FaMobile, FaGlobe, FaWebflow, FaWordpress, FaZapier } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      
        <Card
          title="Nocode Frontend"
          des="Bubble.io, Webflow, Wordpress"
          icon={<FaWordpress/>}
        />
        <Card
          title="Nocode Backend"
          des="Xano"
          icon={<SiProgress />}
        />
        <Card
          title="Outils"
          des="Make, Zapier"
          icon={<FaMobile />}
        />
        <Card
          title="UI Design"
          des="Bootstrap, Tailwind."
          icon={<SiAntdesign />}
        />
        
      </div>
    </section>
  );
}

export default Features
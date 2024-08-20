import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF} from "react-icons/fa";


import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Nocoder.", "Bubbler", "Webflow maker", "Wordpress Designer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Andry Eliasy</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Nocoder |  Frontend : Bubble.io, Webflow, Wordpress | Backend: Xano | Outils : Airtable, Make, Zapier
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4" >
            <span className="bannerIcon" href="https://web.facebook.com/andrihery.eliasy/">
              <FaFacebookF />
            </span>
           
            
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-12">
            <span className="bannerIcon">
             Bubble.io
            </span>
            <span className="bannerIcon">
              Webflow
            </span>
            <span className="bannerIcon">
              Wordpress
            </span>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF } from "react-icons/fa";
import { SiWebflow, SiWordpress } from "react-icons/si";
import { BsChatSquareText, BsChatDots } from "react-icons/bs";

const LeftBanner = ({ onFilterClick }) => {
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
          <div className="flex flex-wrap gap-6">
            <a 
              href="#bubble" 
              className="relative group transition-all duration-300 hover:-translate-y-1 hover:scale-105 block cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                // Cliquer sur le bouton de filtre correspondant
                const bubbleButton = document.getElementById('filter-bubble');
                if (bubbleButton) {
                  bubbleButton.click();
                } else {
                  window.location.hash = 'bubble';
                }
              }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-500/20">
                <BsChatDots className="text-3xl text-white" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white font-medium text-sm">Bubble.io</span>
                </div>
              </div>
            </a>

            <a 
              href="#webflow" 
              className="relative group transition-all duration-300 hover:-translate-y-1 hover:scale-105 block cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                // Cliquer sur le bouton de filtre correspondant
                const webflowButton = document.getElementById('filter-webflow');
                if (webflowButton) {
                  webflowButton.click();
                } else {
                  window.location.hash = 'webflow';
                }
              }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-500/20">
                <SiWebflow className="text-3xl text-white" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white font-medium text-sm">Webflow</span>
                </div>
              </div>
            </a>

            <a 
              href="#wordpress" 
              className="relative group transition-all duration-300 hover:-translate-y-1 hover:scale-105 block cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                // Cliquer sur le bouton de filtre correspondant
                const wordpressButton = document.getElementById('filter-wordpress');
                if (wordpressButton) {
                  wordpressButton.click();
                } else {
                  window.location.hash = 'wordpress';
                }
              }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-500/20">
                <SiWordpress className="text-3xl text-white" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white font-medium text-sm">WordPress</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner
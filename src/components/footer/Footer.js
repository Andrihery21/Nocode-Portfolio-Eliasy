import React from 'react'
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="site-footer w-full h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="footer-brand">
        <span className="brand-monogram">AE</span>
        <span className="brand-name">ANDRY ELIASY</span>
        <div className="flex gap-4">
          <a className="bannerIcon" href="https://web.facebook.com/andry.roadster" target="_blank" rel="noopener noreferrer" aria-label="Profil Facebook d'Andry Eliasy">
            <FaFacebookF />
          </a>
        </div>
      </div>
     
    </div>
  );
}

export default Footer
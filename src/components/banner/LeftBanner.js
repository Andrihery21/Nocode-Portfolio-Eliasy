import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { SiWebflow, SiWordpress } from "react-icons/si";
import { BsChatDots } from "react-icons/bs";
import { HiArrowDownRight, HiArrowUpRight } from "react-icons/hi2";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["sans écrire de code.", "avec Bubble.io.", "avec Webflow.", "avec WordPress.", "avec Framer.", "avec Lovable."],
    loop: true,
    typeSpeed: 46,
    deleteSpeed: 24,
    delaySpeed: 2000,
  });

  return (
    <div className="hero-copy">
      <div>
        <p className="hero-eyebrow">Développeur no-code indépendant</p>
        <h1 className="hero-title">Je donne vie<br />à vos idées<span>.</span></h1>
        <h2 className="hero-role">
          Des produits digitaux, {text}
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#ed7055" />
        </h2>
        <p className="hero-description">
          Je conçois et réalise des expériences web efficaces avec Bubble, Webflow et WordPress, du premier écran jusqu'aux automatisations.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#projects">Explorer mes projets <HiArrowUpRight /></a>
          <a className="button-secondary" href="#contact">Me contacter <HiArrowDownRight /></a>
        </div>
      </div>
      <div className="hero-tools" aria-label="Outils principaux">
        <span className="hero-tool"><BsChatDots /> Bubble.io</span>
        <span className="hero-tool"><SiWebflow /> Webflow</span>
        <span className="hero-tool"><SiWordpress /> WordPress</span>
        <span className="hero-tool"><span className="hero-tool-mark">F</span> Framer</span>
        <span className="hero-tool"><span className="hero-tool-mark">L</span> Lovable</span>
      </div>
    </div>
  );
}

export default LeftBanner
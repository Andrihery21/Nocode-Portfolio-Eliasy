import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import Title from '../layouts/Title';

const Contact = () => {
  return (
    <section id="contact" className="w-full border-b-[1px]">
      <Title title="Un projet en tête ?" des="Parlons-en" />
      <div className="contact-panel">
        <div className="contact-mark"><FaFacebookF /></div>
        <div className="contact-copy">
          <p className="contact-eyebrow">Contact direct</p>
          <h2>Une idée à concrétiser ?</h2>
          <p>Présentez-moi votre projet et voyons comment lui donner forme avec les bons outils no-code.</p>
        </div>
        <a className="button-primary" href="https://web.facebook.com/andry.roadster" target="_blank" rel="noopener noreferrer">
          Écrire à Andry <HiArrowUpRight />
        </a>
      </div>
    </section>
  );
}

export default Contact
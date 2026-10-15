import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="hero-section"
    >
      <LeftBanner />
     <RightBanner />
    </section>
  );
}

export default Banner
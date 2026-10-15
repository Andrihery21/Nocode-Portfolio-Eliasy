import React from 'react'
import bannerPortrait from "../../assets/images/bannerPortrait.webp";

const RightBanner = () => {
  return (
    <div className="hero-visual">
      <div className="hero-photo-frame">
        <img
          src={bannerPortrait}
          alt="Andry Eliasy, développeur no-code"
          width="700"
          height="1051"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-stamp"><small>Mon approche</small>Du concret, du beau, du simple.</div>
    </div>
  );
}

export default RightBanner
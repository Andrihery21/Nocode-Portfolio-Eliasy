import React from 'react'
import bannerPortrait from "../../assets/images/bannerPortrait.JPG";

const RightBanner = () => {
  return (
    <div className="hero-visual">
      <div className="hero-photo-frame">
        <img src={bannerPortrait} alt="Andry Eliasy, développeur no-code" />
      </div>
      <div className="hero-stamp"><small>Mon approche</small>Du concret, du beau, du simple.</div>
    </div>
  );
}

export default RightBanner
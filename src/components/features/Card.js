import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({title,des,icon}) => {
  return (
    <div className="service-card group">
      <div className="service-icon">{icon}</div>
      <div>
        <h2>{title}</h2>
        <p>{des}</p>
      </div>
      <span className="service-arrow"><HiArrowRight /></span>
    </div>
  );
}

export default Card
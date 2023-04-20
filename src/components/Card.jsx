import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ imageURL, alt, title, paragraph, route }) {
  return (
    <div className="card card-normal w-96 shadow-xl image-full glass min-w-min min-h-min m-8">
      <figure>
        <img src={imageURL} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{paragraph}</p>
        <div className="card-actions justify-end animate-pulse">
          <NavLink to={`/${route}`} exact>
            <button className="btn btn-primary">View</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

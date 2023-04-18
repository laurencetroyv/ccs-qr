import React from "react";
import { NavLink } from "react-router-dom";

export default function Card({ information }) {
  const { imageURL, alt, title, paragraph, route } = information;
  return (
    <div className="card w-96 shadow-xl image-full glass min-w-min min-h-min">
      <figure>
        <img src={imageURL} alt={alt} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{paragraph}</p>
        <div className="card-actions justify-end">
          <NavLink to={`/${route}`} exact>
            <button className="btn btn-primary">View</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

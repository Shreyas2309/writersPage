import React, { useState } from "react";
import "./Card.css";

import Data from "../api/api.json"
import logo from "./xyz.jpg";
const Card = () => {
  const [expanded, setExpanded] = useState(false);


  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="h-screenoverflow-hidden">
    {
      Data.map(data => {
        return (
          <div className="flex flex-wrap flex-col h-full items-center pb-4 border-solid-5 relative ">
            <img src={logo} alt="Card" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{data.title}</h2>
              <p
                className={`card-text ${expanded ? "expanded" : ""}`}
                onClick={handleExpand}
              >
                {data.desc}
              </p>

              <div className="card-date-domain mt-3">
                <p className="card-date ">{data.date}</p>
                <p className="card-likes" >{data.likes} </p>
                <p className="card-domain">{data.domain}</p>

              </div>
            </div>
          </div>
        );
      })
    }
    </div>
  );
};

export default Card;

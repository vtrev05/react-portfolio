import React from "react";
import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-card">
        {experience.map((item) => {
          return (
            <div className="container" key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p className="name">{item.where}</p>
              <p className="name">{item.date}</p>
              <p className="name text">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;

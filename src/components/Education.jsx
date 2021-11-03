import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <>
      <div className="education-card">
        {education.map((item) => {
          return (
            <div className="container" key={JSON.stringify(item)}>
              <p className="paragraph">📕 {item.name}</p>
              <p className="name">{item.where}</p>
              <p className="name">{item.date}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Education;

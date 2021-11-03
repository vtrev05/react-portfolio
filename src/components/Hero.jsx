import React from "react";
import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt="profile img" />
      <div className="card">
        <h2>
          {hero.name} {hero.adress}
        </h2>
        <p className="paragraph">🗺️ {hero.city} </p>
        <p className="paragraph">🗓️ {hero.birthDate}</p>
        <p className="paragraph">
          📧<a href={"mailto:" + hero.email}>v.trevijano@gmail.com</a>
        </p>
        <p className="paragraph">📱 {hero.phone}</p>
        <p className="paragraph">
          <a href={hero.gitHub}>
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;

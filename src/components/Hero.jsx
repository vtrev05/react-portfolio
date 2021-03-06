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
        <p className="paragraph">πΊοΈ {hero.city} </p>
        <p className="paragraph">ποΈ {hero.birthDate}</p>
        <p className="paragraph">
          π§<a href={"mailto:" + hero.email}>v.trevijano@gmail.com</a>
        </p>
        <p className="paragraph">π± {hero.phone}</p>
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

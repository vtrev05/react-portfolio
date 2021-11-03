import React from 'react'
import "./More.css"

const More = ({languages, skills, achievements}) => {
    return (
        <>
            <div className="languages">
            {languages.map((item) => {
              return (
                <div className="container" key={JSON.stringify(item)}>
                  <p className="paragraph"> {item.language}</p>
                  <p className="name">Escrito: {item.wrlevel}</p>
                  <p className="name">Hablado: {item.splevel}</p>
                </div>
              );
            })}
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ul>
                  <li className="skill__list--item">{skills[0]}</li>
                  <li className="skill__list--item">{skills[1]}</li>
                  <li className="skill__list--item">{skills[2]}</li>
                  <li className="skill__list--item">{skills[3]}</li>
                  <li className="skill__list--item">{skills[4]}</li>
                  <li className="skill__list--item">{skills[5]}</li>
                  <li className="skill__list--item">{skills[6]}</li>
                  <li className="skill__list--item">{skills[7]}</li>
                </ul>
            </div>
            <div className="achievements">
                {achievements.map((item) => {
              return (
                <div className="container" key={JSON.stringify(item)}>
                  <p className="paragraph">{item.name}</p>
                  <p className="name">{item.where}</p>
                  <p className="text">{item.description}</p>
                </div>
              );
            })}
            </div>
            
        </>
    )
}

export default More

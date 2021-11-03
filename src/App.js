import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import More from "./components/More";
import { CV } from "./cv/CV";

const { hero, education, experience, languages, skills, achievements } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button className="button" onClick={() => setShowEducation(true)}>
        Education
      </button>
      <button className="button" onClick={() => setShowEducation(false)}>
        Experience
      </button>
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More languages={languages} skills={skills} achievements={achievements} />
    </div>
  );
};

export default App;

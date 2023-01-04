import "./GlitchingTitles.css";

import GlitchingTitle from "../GlitchingTitle/GlitchingTitle";

const GlitchingTitles = () => {
  return (
    <div className="glitching-titles-container">
      <div className="glitching-titles-wrapper">
        <GlitchingTitle text={"Hello"} />
        <GlitchingTitle text={"My name is Quan Bao"} />
        <GlitchingTitle text={"I'm a Front End"} />
        <GlitchingTitle text={"Web Developer"} />
      </div>
    </div>
  );
};

export default GlitchingTitles;

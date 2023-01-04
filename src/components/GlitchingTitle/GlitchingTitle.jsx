import "./GlitchingTitle.css";
const GlitchingTitle = ({ text }) => {
  return <h2 data-text={text} className="text-glitch">{text}</h2>;
};

export default GlitchingTitle;

import "./Particles.css";

const Particles = ({ className, isFaster }) => {
  return <div className={className + (isFaster ? " faster" : "")}></div>;
};

export default Particles;

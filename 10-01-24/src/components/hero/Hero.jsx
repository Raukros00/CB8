import "./index.scss";

const Hero = ({ todosCounter }) => {
  const today = new Date().toLocaleDateString("it-IT", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="Hero">
      <div className="Wrapper">
        <div className="Info">
          <h1>Today</h1>
          <p>{todosCounter} Tasks</p>
        </div>
        <h3>{today}</h3>
      </div>
    </div>
  );
};

export default Hero;

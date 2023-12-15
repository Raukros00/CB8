import "./index.css";
import Button from "../button/Button";

const Hero = ({ image, title, text, textButton }) => {
  return (
    <section className="Hero">
      <div className="Hero__Wrapper">
        <div className="Hero__Text">
          <h1>{title}</h1>
          <p>{text}</p>
          <Button textContent={textButton} color="#fff" />
        </div>
        <div className="Hero__Img">
          <img src={image} alt="gear" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import "./index.css";

const Carousel = ({ carouselImagesList }) => {
  let indexCarousel = 0;

  const handleCarouselButton = (action) => {
    const imageEl = document.querySelector("#imageCarousel");

    indexCarousel =
      action === "next"
        ? (indexCarousel + 1) % carouselImagesList.length
        : (indexCarousel - 1 + carouselImagesList.length) %
          carouselImagesList.length;

    imageEl.src = carouselImagesList[indexCarousel].img;
    imageEl.alt = carouselImagesList[indexCarousel].title;
  };

  return (
    <section className="Carousel">
      <div className="Carousel__Wrapper">
        <div className="Carousel__Img">
          <div className="Carousel__Overlay"></div>
          <img
            src={carouselImagesList[0].img}
            alt={carouselImagesList[0].title}
            id="imageCarousel"
          />
        </div>
        <div className="Carousel__Action">
          <button
            className="Carousel__Button"
            onClick={() => handleCarouselButton("prev")}
          >
            {"<"}
          </button>
          <button
            className="Carousel__Button"
            onClick={() => handleCarouselButton("next")}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

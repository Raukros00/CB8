import { useState } from "react";
import styles from "../../styles/Tutorial.module.scss";
import { useRouter } from "next/navigation";
import MainLayout from "@/layouts/mainLayout";

export default function Tutorial() {
  const slides = [
    "Ciao Allenatore, benvenuto nel tuo nuovo pokedex!",
    "Segui questa guida prima di iniziare il tuo viaggio",
    "Sarai in grado di vedere le statistiche dei pokemon",
    "Potrai cercare il suo nome oppure conoscere i più comuni",
    "Se sei pronto per il tuo viaggio clicca il tasto START!",
  ];

  const [counterSlide, setCounterSlide] = useState(0);
  const [textSlide, setTextSlide] = useState(slides[0]);

  const router = useRouter();

  const nextSlide = () => {
    if (counterSlide + 2 > slides.length) {
      router.replace("/");
    }

    setCounterSlide((prevCounterSlide) => prevCounterSlide + 1);
    setTextSlide(slides[counterSlide + 1]);
  };

  const prevSlide = () => {
    setCounterSlide((prevCounterSlide) =>
      prevCounterSlide - 1 < 0 ? prevCounterSlide : prevCounterSlide - 1
    );
    setTextSlide(slides[counterSlide]);
  };

  return (
    <MainLayout navActive={false}>
      <div className={styles.Slider__container}>
        <div className={styles.Slider}>
          <button className={styles.Arrow} onClick={prevSlide}>
            &#60;
          </button>
          <h2 key={counterSlide} className={styles.AnimatedText}>
            {counterSlide + 1}. {textSlide}
          </h2>
          {counterSlide + 2 > slides.length ? (
            <button
              className={`${styles.Arrow} ${styles.Last} `}
              onClick={nextSlide}
            >
              START
            </button>
          ) : (
            <button className={styles.Arrow} onClick={nextSlide}>
              &#62;
            </button>
          )}
        </div>
      </div>
    </MainLayout>
  );
}

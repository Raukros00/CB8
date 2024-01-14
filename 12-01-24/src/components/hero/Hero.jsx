import styles from "./index.module.scss";

const Hero = ({ todosCounter }) => {
  const today = new Date().toLocaleDateString("it-IT", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className={styles.Hero}>
      <div className={styles.Wrapper}>
        <div className={styles.Info}>
          <h1>Today</h1>
          <p className={styles.TaskCount}>{todosCounter} Tasks</p>
        </div>
        <h3 className={styles.Day}>{today}</h3>
      </div>
    </div>
  );
};

export default Hero;

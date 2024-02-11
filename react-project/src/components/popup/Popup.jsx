import styles from "./index.module.scss";

const Popup = ({
  text,
  confirmText,
  cancelText = "",
  handleConfirm,
  handelCancel = "",
}) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Popup}>
        <p>{text}</p>
        <div className={styles.Buttons}>
          <button className={styles.Confirm} onClick={handleConfirm}>
            {confirmText}
          </button>
          {cancelText && (
            <button className={styles.Cancel} onClick={handelCancel}>
              {cancelText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;

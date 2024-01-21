import { useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();

  const onHandleChangeText = (e) => setTextInput(e.target.value);
  const onSubmitSearch = (e) => {
    e.preventDefault();
    const searchElement = textInput.replace(" ", "+");
    navigate(`/book/${searchElement}`);
  };

  return (
    <div className={styles.InputArea}>
      <img
        className={styles.InputImg}
        src="https://img.icons8.com/ios/50/000000/search--v1.png"
        alt="search--v1"
      />
      <form onSubmit={onSubmitSearch}>
        <input
          className={styles.InputBox}
          type="text"
          placeholder="Search..."
          onChange={onHandleChangeText}
          value={textInput}
        />
      </form>
    </div>
  );
};

export default SearchInput;

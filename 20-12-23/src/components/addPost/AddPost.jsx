import { useState } from "react";
import "./index.css";

const AddPost = ({ setPostListData }) => {
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();

    setPostListData((prev) => [
      ...prev,
      {
        image:
          "https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU",
        username: "Pippo",
        id: prev.length + 1,
        title: inputValue,
        body: textareaValue,
        userId: 99,
        tags: ["coding", "bootcamp"],
        reactions: 3,
      },
    ]);

    onHandleClear();
  };

  const onHandleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const onHandleTextareaValue = (event) => {
    setTextareaValue(event.target.value);
  };

  const onHandleClear = () => {
    setInputValue("");
    setTextareaValue("");
  };

  return (
    <form className="AddPost" onSubmit={onHandleSubmit}>
      <h2>New post</h2>

      <input
        type="text"
        placeholder="Inserisci titolo"
        value={inputValue}
        onChange={onHandleInputValue}
      />
      <textarea
        rows="6"
        placeholder="Digita qualcosa di sensazionale"
        value={textareaValue}
        onChange={onHandleTextareaValue}
      ></textarea>
      <div className="AddPost__btns">
        <input type="submit" value="Aggiungi post" />
        <button type="button" onClick={onHandleClear}>
          Pulisci tutto
        </button>
      </div>
    </form>
  );
};

export default AddPost;

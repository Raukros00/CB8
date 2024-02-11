import { useState } from "react";

const TextInput = ({ settings }) => {
  const {
    classForm,
    classInput,
    classSubmit,
    placeholder,
    submitText,
    setText,
  } = settings;

  const [textInput, setTextInput] = useState("");

  const onHandleInput = (e) => setTextInput(e.target.value);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    setText(textInput);
  };

  return (
    <form className={classForm} onSubmit={onHandleSubmit}>
      <input
        className={classInput}
        type="text"
        value={textInput}
        onChange={onHandleInput}
        placeholder={placeholder}
      />
      <button className={classSubmit} type="submit">
        {submitText}
      </button>
    </form>
  );
};

export default TextInput;

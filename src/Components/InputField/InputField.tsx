import React, { useRef } from "react";
import s from "./InputField.module.scss";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAddTodo }: props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className={s.input}
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a task"
        ref={inputRef}
        className={s.inputBox}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={s.inputSubmit} type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

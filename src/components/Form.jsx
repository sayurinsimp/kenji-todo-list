import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };
  return (
    <form
      className="font-primary w-full flex items-center space-x-4 my-6"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-grow outline-none bg-transparent border border-purple-100 p-4 text-purple-100 rounded placeholder:text-gray-300"
        placeholder="What task do you have today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-purple-700 border-none text-purple-100 cursor-pointer rounded flex-shrink-0 p-4">
        Add Task
      </button>
    </form>
  );
};

export default Form;

/* eslint-disable react/prop-types */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form
      className="font-primary w-full flex items-center space-x-4 p-6 mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-grow outline-none bg-transparent border border-purple-100 p-4 text-purple-100 rounded placeholder:text-gray-300"
        placeholder="Update Task"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-purple-100 border-none text-purple-100 cursor-pointer rounded flex-shrink-0">
        Update Task
      </button>
    </form>
  );
};

export default Edit;

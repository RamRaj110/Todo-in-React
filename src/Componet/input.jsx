import React, { useEffect, useState } from "react";

function InputField({ handler, edit, updateTodo, darkMode }) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (edit) {
      setText(edit);
    }
  }, [edit]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    handler(text);
    setText("");
  };

  const handleUpdate = () => {
    updateTodo(text);
    setText("");
  };

  return (
    <div>
      <div className="p-4">
        <h1
          className={`text-3xl text-center font-bold 'mb-8 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Todo List
        </h1>
      </div>
      <div className="text-center ">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter Your Task"
          value={text}
          className={`w-2/5 p-2 pl-5 text-sm border border-solid rounded-md outline-none ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
        />
        {edit ? (
          <button
            onClick={handleUpdate}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 mx-3 rounded ${
              darkMode ? "hover:bg-blue-800" : "hover:bg-blue-700"
            }`}
          >
            Update
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 mx-3 rounded ${
              darkMode ? "hover:bg-blue-800" : "hover:bg-blue-700"
            }`}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default InputField;

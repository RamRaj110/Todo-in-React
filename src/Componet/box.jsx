import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

function ItemBox({
  item,
  deletHandler,
  id,
  editHandler,
  toggleChecked,
  darkMode,
}) {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-1 rounded-lg ">
        <div
          className={`flex justify-between items-center p-2 border-b ${
            darkMode ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => toggleChecked(id)}
              className={`mr-2 ${darkMode ? "bg-gray-700" : "bg-white"}`}
            />
            <h2
              className={`px-4 select-none ${
                item.checked ? "line-through" : ""
              } ${darkMode ? "text-gray-300" : "text-gray-800"}`}
            >
              {item.text}
            </h2>
          </div>
          <div className="flex">
            <span
              className={`cursor-pointer p-2 rounded-full mx-1 ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => deletHandler(id)}
            >
              <IoTrashBinSharp />
            </span>
            <span
              className={`cursor-pointer p-2 rounded-full ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => editHandler(id)}
            >
              <FaEdit />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemBox;

import React from "react";
import ItemBox from "./box";

function Item({ data, deletHandler, editHandler, toggleChecked, darkMode }) {
  const items = data.map((item, index) => (
    <ItemBox
      key={index}
      item={item}
      id={index}
      deletHandler={deletHandler}
      editHandler={editHandler}
      toggleChecked={toggleChecked}
      darkMode={darkMode}
    />
  ));

  return (
    <div
      className={`overflow-auto max-h-[calc(100vh-300px)] ${
        darkMode ? "scrollbar-dark" : "scrollbar-light"
      }`}
    >
      {items}
      {items.length === 0 && (
        <div
          className={`text-xl text-center underline ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Your Task is Empty
        </div>
      )}
    </div>
  );
}

export default Item;

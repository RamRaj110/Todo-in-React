import Nav from "./Componet/nav";
import InputField from "./Componet/input.jsx";
import Item from "./Componet/item.jsx";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handler = (item) => {
    if (item.trim() === "") {
      alert("Please enter a todo.");
    } else {
      const newTodos = [...todos, { text: item, checked: false }];
      console.log("Adding new todo:", newTodos);
      setTodos(newTodos);
      setEdit("");
    }
  };

  const deletBtn = (id) => {
    const newTodos = todos.filter((_, index) => index !== id);
    setTodos(newTodos);
  };

  const editBtn = (id) => {
    const todoEdit = todos[id];
    setEditId(id);
    setEdit(todoEdit.text);
  };

  const updateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo, index) =>
      index === editId ? { ...todo, text: updatedTodo } : todo
    );
    setTodos(newTodos);
    setEdit("");
    setEditId(null);
  };

  const toggleChecked = (id) => {
    const newTodos = todos.map((todo, index) =>
      index === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newTodos);
  };

  return (
    <>
       <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col">
        <InputField handler={handler} edit={edit} updateTodo={updateTodo} darkMode={darkMode} />
        <h2 className="text-2xl font-bold py-2 text-center my-2">Your Tasks</h2>
        <div className="flex-grow overflow-hidden">
          <Item 
            data={todos} 
            deletHandler={deletBtn} 
            editHandler={editBtn} 
            toggleChecked={toggleChecked}
            darkMode={darkMode}
          />
        </div>
      </main>
    </div>
    </>
  );
}

export default App;

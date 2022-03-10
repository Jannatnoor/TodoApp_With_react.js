import logo from "./logo.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";

import { getAllData } from "./api.js";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    usersData();
  }, []);

  const usersData = async () => {
    const result = await getAllData();
    console.log("object");
    console.log(result.data);
  };

  return (
    <div className="App">
      <img src={logo} alt="" />
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;

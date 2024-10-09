import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Date_Time } from "./components/Date_Time";

const reactTodo = "ReactTodo";
function Todo() {
   const[count,setCount] = useState(0);
  const [todos, setTodos] = useState(() => {
    const getTodo = localStorage.getItem(reactTodo);
    if (!getTodo) return [];
    return JSON.parse(getTodo);
  });
  function handleSumbitValue(inputValue) {
    if(count > 8 ) return;
    const { content, id, checked } = inputValue;
    const isExist = todos.find((currEle) => currEle.content === content);
    if (isExist) return;
    if (!content) return;
    setTodos((prev) => [{ id, content, checked }, ...prev])
    setCount((prev)=>prev+1)
  }

  function handleDltBtn(currEle) {
    setTodos(todos.filter((todo) => todo.content !== currEle.content));
    setCount((prev)=>count-1)
  }
  function handleDltAll() {
    setTodos([]);
    setCount(0);
  }
  function handleCheck(currEle) {
    setTodos(
      todos.map((todo) =>
        todo.id === currEle.id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  }
  localStorage.setItem(reactTodo, JSON.stringify(todos));
  document.title = "To-Do List";
  return (
    <div className="cont">
      <div className="Box">
        <Date_Time />
        <TodoForm onAddTodo={handleSumbitValue} />
        
        <TodoList
          todos={todos}
          onDeleteTodo={handleDltBtn}
          onCheckedTodo={handleCheck}
        />
        <footer>
          <button onClick={handleDltAll} className="ca">
            Clear All
          </button>
        </footer>
      </div>
      <div className="op"></div>
    </div>
  );
}
export default Todo;

import { useState } from "react"; 
export function TodoForm({onAddTodo}){
    const [inputValue, setInputValue] = useState({});
    function handleChange(value) {
        setInputValue({id:value, content:value,checked:false});
      }
    function handleSumbitValue(event){
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id:"",content:"",checked:"false"});
    }
    return(
        <div className="todoForm">
        <form onSubmit={handleSumbitValue}>
          <input
            type="text"
            placeholder="Enter your task"
            autoComplete=""
            value={inputValue.content}
            onChange={(event) => handleChange(event.target.value)}
            
          />
        </form>
        {/* <button type="submit" onClick={handleSumbitValue} className="sumBtn">
          Task Add
        </button> */}
      </div>
    )
}
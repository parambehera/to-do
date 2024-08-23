import { CgPlayListAdd } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
export function TodoList({ onDeleteTodo ,todos,onCheckedTodo}){
  function  handleDltBtn(currEle){
    onDeleteTodo(currEle);
  }
  function handlechecked(currEle){
     onCheckedTodo(currEle);
  }

    return(
        <div>
        <ul className="todoUl">
          {todos.map((currEle) => {
            return (
              <li key={currEle.id} className={currEle.checked ? "checkList" : "notCheckList"} id="todoList">
                {currEle.content}
                <div className="dcBtn">
                  <button onClick={()=>handlechecked(currEle)} className="dcBtnc green">
                    <CgPlayListAdd />
                  </button>
                  <button onClick={() => handleDltBtn(currEle)}  className="dcBtnc red">
                    <MdDeleteForever />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    )
}
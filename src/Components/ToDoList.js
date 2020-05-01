import React, { useState } from "react";
import "./ToDoList.css";
import { connect } from "react-redux";
import {
  deleteTask,
  completeTask,
  editTask,
  updateTask,
} from "../Redux/action";

function ToDoList(props) {
  const [updatedItem, setUpdatedItem] = useState("");
  return (
    <div>
      <h2>Let's get some work done!...</h2>
      <hr />
      <ul>
        {/* our tasks */}
        {props.List.map((element) => (
          <div>
            {element.isEditable ? (
              <div>
                <input
                  type="text"
                  value={updatedItem}
                  onChange={(event) => setUpdatedItem(event.target.value)}
                />
                <button
                  onClick={() =>
                    props.updateTask({ id: element.id, text: updatedItem })
                  }
                >
                  Update
                </button>
              </div>
            ) : (
              <li key={element.id}>
                <button onClick={() => props.completeTask(element.id)}>
                  {element.isCompleted ? "Undo" : "Complete"}
                </button>
                <button onClick={() => props.deleteTask(element.id)}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    props.editTask(element.id);
                    setUpdatedItem(element.text);
                  }}
                >
                  Edit
                </button>
                <span className={`${element.isCompleted && "completed-task"}`}>
                  {element.text}
                </span>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

const mapsStateToProps = (state) => ({
  List: state.todoList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (payload) => dispatch(deleteTask(payload)),
    completeTask: (payload) => dispatch(completeTask(payload)),
    editTask: (payload) => dispatch(editTask(payload)),
    updateTask: (payload) => dispatch(updateTask(payload)),
  };
};

export default connect(mapsStateToProps, mapDispatchToProps)(ToDoList);

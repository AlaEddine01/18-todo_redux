import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Redux/action";
function NewToDo(props) {
  const [newtodo, setNewtodo] = useState("");
  const addNewItem = () => {
    props.addTask({
      id: Date.now(),
      text: newtodo,
      isComleted: false,
      isEditable: false,
    });
    setNewtodo("");
  };
  return (
    <div>
      <h1>To-Do App!</h1>
      <h3>Add New To-Do</h3>
      <input
        type="text"
        placeholder="Enter New Task"
        value={newtodo}
        onChange={(event) => setNewtodo(event.target.value)}
      />
      <button onClick={() => addNewItem()}>Add</button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (payload) => dispatch(addTask(payload)),
  };
};
export default connect(null, mapDispatchToProps)(NewToDo);

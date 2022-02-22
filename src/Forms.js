import { useState } from "react";
import { createTodo } from "./actions/index";
import { connect } from "react-redux";

const Forms = (props) => {
  const [toDos, setToDos] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = {
      id: 0,
      task: toDos,
      completed: completed,
    };
    // console.log(newTodos);
    props.createTodo(newTodos);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="toDos">To Do</label>
      <input
        type="text"
        name="toDos"
        value={toDos}
        onChange={(e) => setToDos(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

export default connect(null, { createTodo })(Forms);

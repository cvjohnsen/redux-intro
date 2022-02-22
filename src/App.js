import "./App.css";
import { connect } from "react-redux";
import Forms from "./Forms";

const mapStateToProps = (state) => ({
  todo: state.TODO,
});

function App(props) {
  const { todo } = props;
  console.log(todo);
  return (
    <div className="App">
     
      <Forms todo={todo} />
    {todo.map((task)=> <span>{task.task}</span>)}
    </div>
  );
}

export default connect(mapStateToProps, {})(App);

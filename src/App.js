import "./App.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  todo: state.TODO;
};

function App(props) {
  const { todo } = props;
  console.log(todo);
  return <div className="App"></div>;
}

export default connect(mapStateToProps, {})(App);

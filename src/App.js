import Counter from "./Counter/Counter";
import "./styles.css";
import Todo from "./Todo/Todo";

export default function App() {
  return (
    <div className="App">
      <h1>Todo</h1>
      <Todo />
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}

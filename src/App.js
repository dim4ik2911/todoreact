import "./App.css";
import AddTask from "./component/AddTask";
import TasksList from "./component/TasksList";
import { useState } from "react";
import icon from "../src/icon/changeColor.svg";

function App() {
  const [tasks, handleTask] = useState([]);
  const [color, setColor] = useState(true);
  console.log(tasks);

  return (
    <div class={color ? "App black" : "App white"}>
      <button onClick={() => setColor(!color)} class="App__button">
        <img
          src={icon}
          class="App__button_icon"
          alt="Change backround button"
        />
      </button>
      <h1 class="App__name">To Do List</h1>
      <AddTask class="App__addTask" tasks={tasks} handleTask={handleTask} />
      <TasksList class="App__tasksList" tasks={tasks} />
    </div>
  );
}

export default App;

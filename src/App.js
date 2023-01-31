import "./styles.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

export function App() {
  let [tasks, setTasks] = useState([]);

  //add task to list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    console.log(`deleted ${id}`);
    setTasks((tasks = tasks.filter((task) => id !== task.id)));
    console.log(...tasks);
  };

  return (
    <div className="container">
      <Header addTask={addTask} />
      {tasks.length > 0 ? (
        <Body tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <small>No tasks added yet</small>
      )}
      <Footer />
    </div>
  );
}
export default App;

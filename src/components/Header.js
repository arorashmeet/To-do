import AddTaskForm from "./AddTaskForm";
import Button from "./Button";
import { useState } from "react";

const Header = (props) => {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <>
      <header>
        <h1>TODO App</h1>
        <Button
          title={toggleForm ? "Hide" : "Show"}
          color={toggleForm ? "black" : "coral"}
          onClick={() => setToggleForm(!toggleForm)}
        />
      </header>
      {toggleForm && <AddTaskForm addTask={props.addTask} />}
    </>
  );
};

export default Header;

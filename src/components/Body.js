import Task from "./Task";

const Body = (props) => {
  return (
    <div>
      {props.tasks.map((e) => (
        <Task task={e} deleteTask={props.deleteTask} />
      ))}
    </div>
  );
};

export default Body;

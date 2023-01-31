import Button from "./Button";

const Task = (props) => {
  return (
    <div className={`task-light ${props.task.reminder ? "reminder" : ""} `}>
      <h3>
        {props.task.name}
        <Button
          title="X"
          color="coral"
          onClick={() => props.deleteTask(props.task.id)}
        />
      </h3>
    </div>
  );
};

export default Task;

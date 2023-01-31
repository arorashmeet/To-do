import { useState } from "react";

const AddTaskForm = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [reminder, setReminder] = useState(false);
  const onFormSubmit = (event) => {
    event.preventDefault();
    const id = Math.floor(Math.random() * 100) + 2;
    props.addTask({ id, name, date, reminder });
    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onFormSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          required
        />
      </div>
      <div className="form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(event) => setReminder(event.target.checked)}
        />
      </div>
      <input className="btn btn-block dark" type="Submit" />
    </form>
  );
};
export default AddTaskForm;

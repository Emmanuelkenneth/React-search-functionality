//import { FaTimes } from ".react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <span
          style={{
            height: "10px",
            width: "20px",
            border: "2px solid blue",
            marginLeft: "90px",
            padding: "1px 10px",
          }}
        >
          <i
            style={{
              color: "red",

              cursor: "pointer",
              padding: "2px",
            }}
            onClick={() => onDelete(task.id)}
          >
            x
          </i>
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
export default Task;

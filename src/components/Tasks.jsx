import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onOpenTask(task) {
    const searchParams = new URLSearchParams({
      title: task.title,
      description: task.description,
    });
    navigate(`/task?${searchParams.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={
              "bg-slate-400 text-left w-full text-white p-2 rounded-md" +
              (task.isCompleted ? " line-through" : "")
            }
          >
            {task.title}
          </button>
          <button
            onClick={() => onOpenTask(task)}
            className="bg-slate-400 text-white p-2 rounded-md ml-2"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onTaskDelete(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md ml-2"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

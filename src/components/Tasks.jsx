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
    <ul className="max-h-[400px] overflow-y-auto space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={
              "bg-slate-400 text-left w-full text-white p-2 rounded-md hover:scale-[1.02] transition-all duration-200" +
              (task.isCompleted ? " line-through bg-slate-500" : "")
            }
          >
            {task.title}
          </button>
          <button
            onClick={() => onOpenTask(task)}
            className="bg-slate-500 text-white p-2 rounded-md ml-2 hover:scale-[1.02] transition-all duration-200"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onTaskDelete(task.id)}
            className="bg-red-600 text-white p-2 rounded-md ml-2 hover:scale-[1.02] transition-all duration-200"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

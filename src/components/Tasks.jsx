import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
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
          <button className="bg-slate-400 text-white p-2 rounded-md ml-2">
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

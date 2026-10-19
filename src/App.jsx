import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: v4(),
      title: "Estudar programação",
      description: "Estudar ReactJS para melhorar minhas skills de front-end",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar inglês",
      description: "Estudar inglês para melhorar minhas skills de comunicação",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Estudar estrutura de dados",
      description:
        "Estudar estrutura de dados para melhorar minhas skills de programação",
      isCompleted: false,
    },
    {
      id: v4(),
      title: "Ler livros",
      description: "Ler livros para melhorar minhas skills de leitura",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskDelete(taskId) {
    const newTasks = tasks.filter(function (task) {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          TASK MANAGER
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;

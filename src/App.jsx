import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar ReactJS para melhorar minhas skills de front-end",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para melhorar minhas skills de comunicação",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar estrutura de dados",
      description:
        "Estudar estrutura de dados para melhorar minhas skills de programação",
      isCompleted: false,
    },
    {
      id: 4,
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

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Task manager
        </h1>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
        <AddTask />
      </div>
    </div>
  );
}

export default App;

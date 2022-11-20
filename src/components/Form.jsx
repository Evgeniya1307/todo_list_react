import { Button } from "./Button";
import { useState, useEffect } from "react";
import { AlertError } from "./AlertError";



export const Form = ({ task, tasks, setTasks, setTask }) => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(task).length > 0) {
      setTitle(task.title);
      setMessage(task.message);
      setDate(task.date);
      console.log("A task  👨‍⚖️  ");
    }
  }, [task]);

  const generateID = () => {
    const id = Math.random().toString(20).substr(2);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([title, message, date].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    const taskObject = {
      title,
      message,
      date,
      id: generateID(),
    };

    if (task.id) {
      taskObject.id = task.id;
      const updatedTasks = tasks.map((resp) =>
        resp.id === task.id ? taskObject : resp
      );
      setTasks(updatedTasks);
      setTask({});
    } else {
      taskObject.id = generateID();
      setTasks([...tasks, taskObject]);
    }
    setTitle("");
    setMessage("");
    setDate("");
  };

  return (
    <>
      <div className=" py-10 px-5 w-full  ">
        <h5 className="text-orange-200 text-xl leading-tight font-medium mb-2">
         Добавить Задачи...
        </h5>
        <div className=" block p-6 rounded-lg shadow-lg dark:bg-gray-800 ">
          <form onSubmit={handleSubmit}>
            {error && (
              <AlertError>
                <p className="font-bold">Hey!</p>
                <p className="text-sm">
                Сначала вы должны заполнить всю форму
                </p>
              </AlertError>
            )}
            <div className="mb-5">
              <input
                className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-white
              bg-slate-800 bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-white focus:bg-slate-800 focus:border-blue-600 focus:outline-none
            "
                type="text"
                placeholder="Заголовок Задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <textarea
                className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-white
                bg-slate-800 bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-white focus:bg-slate-800 focus:border-blue-600 focus:outline-none
              "
                rows="3"
                placeholder="Описание задачи"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-5">
              <input
                className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-white
                bg-slate-800 bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-white focus:bg-slate-800 focus:border-blue-600 focus:outline-none
                "
                type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            {!task.id ? <Button>Добавить</Button> : <Button>Update</Button>}
          </form>
        </div>
      </div>
    </>
  );
};

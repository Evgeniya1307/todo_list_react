import { NoList } from "./NoList";
import { Task } from "./Task";


// Список заданий
export const List = ({ deleteTask, tasks, setTask }) => {
  return (
    <>
      <div className=" overflow-y-auto h-screen  py-10 px-5 w-full">
        {tasks && tasks.length ? (
          <>
            <h5 className="text-orange-200 text-xl leading-tight font-medium mb-2">
            Список заданий
            </h5>
            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  deleteTask={deleteTask}
                  task={task}
                  setTask={setTask}
                />
              );
            })}
          </>
        ) : (
          <NoList />
        )}
      </div>
    </>
  );
};

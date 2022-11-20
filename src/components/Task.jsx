


export const Task = ({ deleteTask, task, setTask }) => {
  const { title, message, date, id } = task;

  return (
    <>
      <div className="flex justify-center">
        <div className=" mt-5 block rounded-lg shadow-lg dark:bg-gray-800  max-w-sm text-center">
          <div className="py-3 px-6 border-b border-gray-300 text-gray-500">
          Сделать...
          </div>
          <div className="p-6">
            <h5 className="dark:text-slate-400 text-xl font-medium mb-2">
              {title}
            </h5>
            <p className="dark:text-slate-400 text-base mb-4">{message}</p>
            <button
              onClick={() => deleteTask(id)}
              type="button"
              className=" dark:bg-orange-400 inline-block px-6 py-2 border-2 border-orange-200 text-orange-200 font-medium text-xs leading-tight uppercase rounded-full   hover:bg-black hover:bg-opacity-5 focus:outline-none"
            >
              Delete
            </button>
            <button
              onClick={() => setTask(task)}
              type="button"
              className=" dark:bg-orange-400 inline-block px-6 py-2 border-2 border-orange-200 text-orange-200 font-medium text-xs leading-tight uppercase rounded-full   hover:bg-black hover:bg-opacity-5 focus:outline-none"
            >
              Update
            </button>
          </div>
          <div className="py-3 px-6 border-t border-gray-300 text-gray-500">
            {date}
          </div>
        </div>
      </div>
    </>
  );
};

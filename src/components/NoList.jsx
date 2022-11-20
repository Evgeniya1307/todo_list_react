import addNote from "../assets/addNote.svg";


//изображение когда в списке нет ничего
export const NoList = () => {
  return (
    <>
      <div className="flex justify-center  ">
        <div className="rounded-lg shadow-lg dark:bg-gray-800 max-w-sm ">
          <img
            className="rounded-t-lg img-fluid"
            src={addNote}
            alt="The board is empty"
          />
        </div>
      </div>
    </>
  );
};

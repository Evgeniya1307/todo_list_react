export const Button = ({ children }) => {
  return (
    <>
      <button className=" dark:bg-orange-400 inline-block px-6 py-2 border-2 border-orange-200 text-orange-200 font-medium text-xs leading-tight uppercase rounded-full   hover:bg-black hover:bg-opacity-5 focus:outline-none">
        {children}
      </button>
    </>
  );
};
